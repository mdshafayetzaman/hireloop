import { Hero } from "@/components/hero"

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[32rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(91,91,246,0.35),transparent_70%)]"
      />

      <Hero />
    </main>
  )
}
