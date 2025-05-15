"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full h-full flex-col items-center justify-center overflow-hidden bg-background rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-120 items-center justify-center isolate z-0">
        {/* Left side flicker beam */}
        <div
          style={{
            width: "clamp(10rem, 30vw, 30rem)",
            height: "clamp(6rem, 14vw, 14rem)",
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 overflow-visible bg-gradient-conic from-purple-400 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] animate-flicker"
        >
          <div className="absolute w-full left-0 bg-transparent h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-transparent bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>

        {/* Right side flicker beam */}
        <div
          style={{
            width: "clamp(10rem, 30vw, 30rem)",
            height: "clamp(6rem, 14vw, 14rem)",
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 bg-gradient-conic from-transparent via-transparent to-purple-400 text-white [--conic-position:from_290deg_at_center_top] animate-flicker"
        >
          <div className="absolute w-40 h-full right-0 bg-transparent bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-transparent h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>

        {/* Shadow beam */}
        <div className="absolute top-1/2 translate-y-12 scale-x-150 w-full h-[12rem] bg-transparent blur-2xl" />

        {/* Blurred overlay */}
        <div className="absolute top-1/2 z-50 h-[12rem] w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Light glow */}
        <div
          style={{
            width: "clamp(8rem, 36vw, 28rem)",
            height: "clamp(5rem, 9vw, 9rem)",
          }}
          className="absolute inset-auto z-50 -translate-y-1/2 rounded-full bg-purple-400 opacity-50 blur-3xl animate-flicker"
        />

        {/* Core glow */}
        <div
          style={{
            width: "clamp(6rem, 26vw, 16rem)",
            height: "clamp(5rem, 9vw, 9rem)",
          }}
          className="absolute inset-auto z-30 -translate-y-[6rem] rounded-full bg-purple-400 blur-2xl animate-flicker"
        />

        {/* Center line */}
        <div
          style={{ width: "clamp(10rem, 40vw, 30rem)" }}
          className="absolute inset-auto z-50 h-0.5 -translate-y-[7rem] bg-purple-400"
        />

        {/* Mask at top of lamp */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background" />

        {/* Children content */}
        <div className="relative z-50 flex -translate-y-[1.5rem] sm:translate-y-[1rem] md:translate-y-[3rem] lg:translate-y-[5rem]">
          {children}
        </div>
      </div>
    </div>
  );
};
