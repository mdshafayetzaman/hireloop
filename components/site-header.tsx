"use client"

import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SiteLogo } from "@/components/site-logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Find Jobs" },
  { href: "/companies", label: "Companies" },
  { href: "/employers", label: "For Employers" },
] as const

const navLinkClasses =
  "rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-brand-blue"

const ctaClasses =
  "bg-linear-to-r from-brand-blue to-brand-orange text-white hover:opacity-90"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Hireloop home" className="shrink-0">
          <SiteLogo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClasses}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost">Log in</Button>
          <Button className={ctaClasses}>Get Started</Button>
        </div>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="top" className="gap-0 md:hidden">
            <SheetHeader className="pr-12">
              <SheetTitle className="flex items-center">
                <SiteLogo className="text-[1.25rem]" />
              </SheetTitle>
            </SheetHeader>
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 border-b px-4 py-2"
            >
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link
                      href={link.href}
                      className={cn(navLinkClasses, "py-2.5")}
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <SheetFooter className="flex-row gap-2 pt-4">
              <SheetClose
                render={<Button variant="outline" className="flex-1" />}
              >
                Log in
              </SheetClose>
              <SheetClose
                render={<Button className={cn(ctaClasses, "flex-1")} />}
              >
                Get Started
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
