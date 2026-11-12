import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white shadow-xs transition-[color,box-shadow,background-color] outline-none select-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white placeholder:text-white/35 hover:bg-white/[0.06] focus-visible:border-brand-indigo/60 focus-visible:bg-white/[0.06] focus-visible:ring-3 focus-visible:ring-brand-indigo/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
