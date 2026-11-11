import Link from "next/link"
import { ArrowRightIcon, MapPinIcon, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const stats = [
  { value: "48k+", label: "Open roles" },
  { value: "12k+", label: "Companies hiring" },
  { value: "190k+", label: "Verified candidates" },
  { value: "92%", label: "Offer rate" },
] as const

const popularRoles = [
  "UI Designer",
  "React Developer",
  "Product Manager",
  "Data Analyst",
] as const

const searchCta =
  "h-11 rounded-xl bg-brand-indigo px-6 text-sm font-medium text-white hover:bg-brand-indigo-deep sm:h-12 sm:rounded-full"

export function Hero() {
  return (
    <section className="relative px-4 pt-14 pb-20 sm:px-6 sm:pt-20">
      {/* warm glow echoing the logo's orange swirl */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-[40rem] rounded-full bg-brand-orange/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto flex w-fit items-center gap-2.5 rounded-full bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/70 ring-1 ring-white/10">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-orange/60" />
            <span className="relative inline-flex size-2 rounded-full bg-brand-orange" />
          </span>
          Now live — AI-powered candidate matching
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Hire the right{" "}
          <span className="bg-linear-to-r from-brand-blue via-brand-violet to-brand-orange bg-clip-text text-transparent">
            talent
          </span>
          , faster.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
          Post a role, match with verified candidates, and run interviews in
          one seamless loop. Hireloop keeps every stage of hiring connected —
          from first click to signed offer.
        </p>

        {/* Search */}
        <form
          action="/jobs"
          className="mx-auto mt-8 flex max-w-2xl flex-col gap-2 rounded-3xl bg-white/[0.04] p-2 ring-1 ring-white/10 backdrop-blur transition-colors focus-within:bg-white/[0.06] sm:flex-row sm:items-center sm:rounded-full"
        >
          <label className="flex flex-1 items-center gap-2.5 rounded-full px-4 py-2 text-sm transition-colors hover:bg-white/[0.04] sm:py-2.5">
            <SearchIcon className="size-4 shrink-0 text-white/40" />
            <input
              name="q"
              placeholder="Job title or keyword"
              className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
            />
          </label>

          <div
            aria-hidden="true"
            className="hidden h-6 w-px shrink-0 bg-white/10 sm:block"
          />

          <label className="flex flex-1 items-center gap-2.5 rounded-full px-4 py-2 text-sm transition-colors hover:bg-white/[0.04] sm:py-2.5">
            <MapPinIcon className="size-4 shrink-0 text-white/40" />
            <input
              name="location"
              placeholder="Location"
              className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
            />
          </label>

          <Button type="submit" className={cn(searchCta, "shrink-0")}>
            Search jobs
          </Button>
        </form>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/45">
          <span>Popular:</span>
          {popularRoles.map((role) => (
            <Link
              key={role}
              href={`/jobs?q=${encodeURIComponent(role)}`}
              className="rounded-md px-1.5 py-0.5 transition-colors hover:text-white"
            >
              {role}
            </Link>
          ))}
          <Link
            href="/jobs"
            className="ml-1 inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-medium text-brand-orange transition-colors hover:text-white"
          >
            Browse all jobs
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>

        {/* Stats */}
        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-xs text-white/45 sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
