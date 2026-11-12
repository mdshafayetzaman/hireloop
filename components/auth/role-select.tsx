"use client"

import * as React from "react"
import { BriefcaseIcon, ShieldIcon, UserIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export const ROLES = ["seeker", "recruiter", "admin"] as const

export type Role = (typeof ROLES)[number]

const options = [
  {
    value: "seeker",
    label: "Seeker",
    description: "Looking for your next role",
    icon: UserIcon,
  },
  {
    value: "recruiter",
    label: "Recruiter",
    description: "Hiring for your team",
    icon: BriefcaseIcon,
  },
  {
    value: "admin",
    label: "Admin",
    description: "Manage the platform",
    icon: ShieldIcon,
  },
] as const

export function RoleSelect({
  value,
  onChange,
  name = "role",
}: {
  value: Role
  onChange: (role: Role) => void
  name?: string
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-white/85">I am a</legend>

      <div className="grid gap-2 sm:grid-cols-3">
        {options.map((option) => {
          const Icon = option.icon
          const isSelected = value === option.value

          return (
            <label
              key={option.value}
              className={cn(
                "group relative flex cursor-pointer flex-col gap-1 rounded-xl border p-3 transition-colors",
                "focus-within:ring-3 focus-within:ring-brand-indigo/30",
                isSelected
                  ? "border-brand-indigo/70 bg-brand-indigo/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
              )}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />

              <span className="flex items-center gap-2">
                <Icon
                  className={cn(
                    "size-4 transition-colors",
                    isSelected
                      ? "text-brand-indigo"
                      : "text-white/45 group-hover:text-white/70"
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isSelected ? "text-white" : "text-white/80"
                  )}
                >
                  {option.label}
                </span>
              </span>

              <span className="text-xs text-white/45">
                {option.description}
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
