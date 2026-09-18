"use client";

import {
  AnimatePresence,
  motion,
  MotionValue,
  SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

const DEFAULT_MAGNIFICATION = 75;
const DEFAULT_DISTANCE = 140;
const DEFAULT_PANEL_HEIGHT = 64;

interface DockProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  magnification?: number;
  panelHeight?: number;
}

interface DockItemProps {
  children: ReactNode;
  className?: string;
}

interface DockIconProps {
  children: ReactNode;
  className?: string;
}

interface DockLabelProps {
  children: ReactNode;
  className?: string;
}

interface DockContextType {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  magnification: number;
  distance: number;
}

const DockContext = createContext<DockContextType | null>(null);

export function Dock({
  children,
  className,
  distance = DEFAULT_DISTANCE,
  magnification = DEFAULT_MAGNIFICATION,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const [isHovered, setIsHovered] = useState(false);

  const spring: SpringOptions = {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  };

  return (
    <DockContext.Provider
      value={{
        mouseX,
        spring,
        magnification,
        distance,
      }}
    >
      <motion.div
        style={{
          height: panelHeight,
        }}
        className={cn(
          "relative flex items-end justify-center gap-2 rounded-2xl px-3 pb-2",
          className
        )}
        onMouseMove={(event) => {
          setIsHovered(true);
          mouseX.set(event.pageX);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          mouseX.set(Infinity);
        }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 rounded-2xl"
            />
          )}
        </AnimatePresence>

        <div className="relative flex items-end gap-2">
          {children}
        </div>
      </motion.div>
    </DockContext.Provider>
  );
}

export function DockItem({
  children,
  className,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const context = useContext(DockContext);

  if (!context) {
    throw new Error("DockItem must be used inside Dock");
  }

  const {
    mouseX,
    spring,
    magnification,
    distance,
  } = context;

  const distanceFromMouse = useTransform(
    mouseX,
    (value) => {
      const rect = ref.current?.getBoundingClientRect();

      if (!rect) {
        return Infinity;
      }

      return value - (rect.left + rect.width / 2);
    }
  );

  const width = useTransform(
    distanceFromMouse,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const height = useTransform(
    distanceFromMouse,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const springWidth = useSpring(width, spring);
  const springHeight = useSpring(height, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: springWidth,
        height: springHeight,
      }}
      className={cn(
        "group relative flex shrink-0 items-center justify-center",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function DockIcon({
  children,
  className,
}: DockIconProps) {
  return (
    <motion.div
      className={cn(
        "flex h-full w-full items-center justify-center",
        "rounded-xl",
        "border border-white/10",
        "bg-white/10",
        "text-white",
        "backdrop-blur-xl",
        "transition-colors duration-200",
        "hover:bg-white/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function DockLabel({
  children,
  className,
}: DockLabelProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -top-9 left-1/2",
        "-translate-x-1/2",
        "whitespace-nowrap",
        "rounded-md",
        "border border-white/10",
        "bg-black/90",
        "px-2.5 py-1",
        "text-xs text-white",
        "opacity-0",
        "transition-all duration-200",
        "group-hover:-translate-y-1",
        "group-hover:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}