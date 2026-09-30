"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Something went wrong.");
        return;
      }

      setStatus("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 max-w-2xl space-y-5">
      <input
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        required
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
      />

      <input
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        required
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
      />

      <textarea
        placeholder="Tell me about your project..."
        value={form.message}
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
        required
        rows={6}
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-full border border-white/20 px-7 py-3 text-sm transition duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="text-sm text-white/60">
          {status}
        </p>
      )}
    </form>
  );
}