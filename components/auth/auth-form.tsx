"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RoleSelect, type Role } from "@/components/auth/role-select"
import { cn } from "@/lib/utils"

export type AuthMode = "sign-in" | "sign-up"

export type AuthFormData = {
  name: string
  email: string
  password: string
  role?: Role
}

type AuthFormProps = {
  mode: AuthMode
  onSubmit: (data: AuthFormData) => Promise<unknown>
}

const tabs = [
  { label: "Sign In", href: "/sign-in", value: "sign-in" },
  { label: "Sign Up", href: "/sign-up", value: "sign-up" },
] as const

const ctaClass =
  "h-11 w-full rounded-xl bg-brand-indigo text-sm font-semibold text-white shadow-lg shadow-brand-indigo/25 transition-colors hover:bg-brand-indigo/90"

const fieldClass = "w-full"

export function AuthForm({ mode, onSubmit }: AuthFormProps) {
  const pathname = usePathname()

  const [showPassword, setShowPassword] = React.useState(false)
  const [pending, setPending] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [role, setRole] = React.useState<Role>("seeker")

  const isSignUp = mode === "sign-up"

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const data: AuthFormData = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
      role: isSignUp ? role : undefined,
    }

    setPending(true)
    setErrorMessage("")

    try {
      await onSubmit(data)
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div
        role="tablist"
        aria-label="Authentication"
        className="grid grid-cols-2 gap-1 rounded-xl bg-white/[0.04] p-1 ring-1 ring-white/10"
      >
        {tabs.map((tab) => {
          const isActive = pathname === tab.href

          return (
            <Link
              key={tab.value}
              href={tab.href}
              role="tab"
              aria-selected={isActive}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-white/[0.08] text-white shadow-sm"
                  : "text-white/55 hover:text-white/85"
              )}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-[#0d0d15] p-6 shadow-xl shadow-black/40 sm:p-8">
        <div className="mb-7">
          <h1 className="text-2xl font-semibold tracking-tight">
            {isSignUp ? "Create your account" : "Welcome back"}
          </h1>

          <p className="mt-1.5 text-sm text-white/50">
            {isSignUp
              ? "Start hiring and connecting with verified talent today."
              : "Sign in to continue to your Hireloop account."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Ada Lovelace"
                required
                className={fieldClass}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
              className={fieldClass}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>

              {!isSignUp && (
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-white/45 transition-colors hover:text-white"
                >
                  Forgot password?
                </Link>
              )}
            </div>

            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete={isSignUp ? "new-password" : "current-password"}
                placeholder={
                  isSignUp ? "At least 8 characters" : "Enter your password"
                }
                minLength={8}
                maxLength={128}
                required
                className={cn(fieldClass, "pr-11")}
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-white/40 transition-colors hover:text-white/80"
              >
                {showPassword ? (
                  <EyeOffIcon className="size-4" />
                ) : (
                  <EyeIcon className="size-4" />
                )}
              </button>
            </div>
          </div>

          {!isSignUp && (
            <label className="flex cursor-pointer items-center gap-2.5 pt-1 text-sm text-white/60">
              <input
                type="checkbox"
                name="remember"
                defaultChecked
                className="size-4 rounded border-white/20 bg-white/[0.04] accent-brand-indigo"
              />
              Keep me signed in
            </label>
          )}

          {isSignUp && <RoleSelect value={role} onChange={setRole} />}

          {errorMessage && (
            <p role="alert" className="text-sm text-red-400">
              {errorMessage}
            </p>
          )}

          <Button
            type="submit"
            disabled={pending}
            className={cn(ctaClass, "mt-2")}
          >
            {pending ? (
              <>
                <Loader2Icon className="animate-spin" />
                Please wait
              </>
            ) : isSignUp ? (
              "Create account"
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-white/50">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}

          <Link
            href={isSignUp ? "/sign-in" : "/sign-up"}
            className="font-medium text-brand-violet transition-colors hover:text-brand-violet/80"
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </Link>
        </p>
      </div>
    </div>
  )
}
