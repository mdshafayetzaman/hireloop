"use client"

import { AuthForm } from "@/components/auth/auth-form"
import type { AuthFormData } from "@/components/auth/auth-form"
import { authClient } from "@/lib/auth-client"

export default function SignInPage() {
  const handleSignIn = async (data: AuthFormData) => {
    const { data: signInResponse, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/hireloop",
    })

    if (error) {
      throw new Error(error.message)
    }

    return signInResponse
  }

  return <AuthForm mode="sign-in" onSubmit={handleSignIn} />
}
