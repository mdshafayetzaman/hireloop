import { cn } from "@/lib/utils"

/** Two interlocking arrows forming a loop — the "o" of the wordmark. */
function SwirlMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-[1.08em] translate-y-px", className)}
    >
      {/* top arc — blue, flowing right to left */}
      <path
        d="M18.93 8 A8 8 0 0 0 5.07 8"
        stroke="var(--brand-blue)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M3.77 10.25 L6.63 8.9 L3.51 7.1 Z" fill="var(--brand-blue)" />
      {/* bottom arc — orange, flowing left to right */}
      <path
        d="M5.07 16 A8 8 0 0 0 18.93 16"
        stroke="var(--brand-orange)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M20.23 13.75 L20.49 16.9 L17.37 15.1 Z" fill="var(--brand-orange)" />
    </svg>
  )
}

export function SiteLogo({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[1.4rem] leading-none font-bold tracking-tight select-none",
        className
      )}
      {...props}
    >
      <span className="text-brand-blue">hirel</span>
      <SwirlMark className="-mx-px" />
      <span className="text-brand-orange">op</span>
    </span>
  )
}
