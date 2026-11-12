"use client"

import { AuthForm } from "@/components/auth/auth-form"
import type { AuthFormData } from "@/components/auth/auth-form"
import { authClient } from "@/lib/auth-client"

export default function SignUpPage() {
  const handleSignUp = async (data: AuthFormData) => {
    const result = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      // Sent as an additional user field — validated server-side against the
      // allowed roles in `lib/auth.ts`.
      role: data.role,
      callbackURL: "/",
    })

    if (result.error) {
      console.error("SIGN UP ERROR:", result.error)
      console.error("ERROR CODE:", result.error.code)
      console.error("ERROR STATUS:", result.error.status)

      throw new Error(result.error.message)
    }

    console.log("SIGN UP SUCCESS:", result.data)

    return result.data
  }

  return <AuthForm mode="sign-up" onSubmit={handleSignUp} />
}
