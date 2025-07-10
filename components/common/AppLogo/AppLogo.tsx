import AppIcon from "@/components/svg/AppIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const AppLogo = ({ type }: { type: string }) => {
  return (
    <Link href="/">
      <div className="flex items-center gap-1">
        <span
          className={cn(
            "font-extrabold uppercase tracking-tighter font-['var(--font-app-logo)']",
            type === "welcome-page"
              ? "text-9xl text-white"
              : "text-4xl text-black"
          )}
        >
          Projex
        </span>
        <span>
          <AppIcon
            strokeWidth={2}
            className={cn(
              type === "welcome-page"
                ? "w-32 h-32 stroke-white fill-transparent"
                : "w-10 h-10 stroke-black"
            )}
          />
        </span>
      </div>
    </Link>
  );
};
