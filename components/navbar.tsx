"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "cn"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
] as const

const brandButton =
  "h-10 rounded-lg bg-[#5b5bf6] px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#4b4be0] sm:h-11 sm:px-6 sm:text-[0.9375rem]"

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="hireloop home" className={cn("shrink-0", className)}>
      <Image
        src="/image/logo.png"
        alt="hireloop"
        width={300}
        height={112}
        priority
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  )
}

function SignInLink({ className }: { className?: string }) {
  return (
    <Link
      href="/sign-in"
      className={cn(
        "text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300",
        className
      )}
    >
      Sign In
    </Link>
  )
}

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 p-3 backdrop-blur-md sm:p-4">
      <div className="flex h-16 items-center justify-between gap-4 rounded-2xl bg-card px-4 shadow-sm ring-1 ring-black/5 sm:px-6 dark:ring-white/10 sm:h-[4.5rem]">
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/85 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <span aria-hidden="true" className="h-6 w-px bg-border" />

          <SignInLink />
          <Button className={brandButton}>Get Started</Button>
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 px-4 pb-4">
                <SignInLink className="py-2.5 text-center" />
                <Button
                  className={cn(brandButton, "h-11 w-full")}
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
