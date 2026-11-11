"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
] as const

const ctaClass =
  "h-10 rounded-xl bg-brand-indigo px-5 text-sm font-semibold text-white shadow-lg shadow-brand-indigo/25 transition-colors hover:bg-brand-indigo/90 sm:h-11 sm:px-6 sm:text-[0.9375rem]"

const navLinkClass =
  "text-[0.9375rem] font-medium text-white/85 transition-colors hover:text-white"

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Hireloop home"
      className="flex shrink-0 items-center"
    >
      <Image
        src="/image/logo.png"
        alt="Hireloop"
        width={154}
        height={44}
        preload
        sizes="(min-width: 640px) 144px, 128px"
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  )
}

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08080c] p-3 backdrop-blur-xl sm:p-4">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0d0d15] px-4 shadow-xl shadow-black/40 sm:h-[4.5rem] sm:px-6"
      >
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}

          <span aria-hidden="true" className="h-5 w-px bg-white/15" />

          <Link
            href="/sign-in"
            className={cn(
              navLinkClass,
              "text-brand-violet hover:text-brand-violet/80"
            )}
          >
            Sign In
          </Link>

          <Link href="/get-started" className={cn(buttonVariants(), ctaClass)}>
            Get Started
          </Link>
        </div>

        {/* Mobile / tablet actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/get-started"
            className={cn(buttonVariants(), ctaClass, "hidden sm:inline-flex")}
          >
            Get Started
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  aria-label="Open menu"
                  className="text-white/85 hover:bg-white/10 hover:text-white"
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85%] border-white/10 bg-[#0d0d15] text-white sm:max-w-sm"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-[0.9375rem] font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 px-4 pb-4">
                <Link
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-center text-[0.9375rem] font-medium text-brand-violet transition-colors hover:bg-white/5 hover:text-brand-violet/80"
                >
                  Sign In
                </Link>
                <Link
                  href="/get-started"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants(), ctaClass, "w-full")}
                >
                  Get Started
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
