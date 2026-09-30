import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;
 
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          email,
          message,
        },
      ]);

    if (error) {
      console.error("Supabase error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to save message.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message saved successfully!",
    });
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid request.",
      },
      { status: 400 }
    );
  }
}