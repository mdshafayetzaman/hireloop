import { createAuthClient } from "better-auth/react"

export const authCLient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
})

export const { signIn, signUp, useSession } = createAuthClient()
