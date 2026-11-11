import { cn } from "@/lib/utils"

export function PlaceholderPage({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1400px] flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className={cn("mt-4 max-w-xl text-white/60")}>{description}</p>
    </main>
  )
}
