import { betterAuth } from "better-auth"
import { MongoClient } from "mongodb"
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import { z } from "zod"

const client = new MongoClient(process.env.MONGODB_URI!)

const db = client.db("hireloopdb")

export const ROLES = ["seeker", "recruiter", "admin"] as const

export type Role = (typeof ROLES)[number]

export const auth = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
  },
  user: {
    additionalFields: {
      role: {
        type: [...ROLES],
        required: false,
        defaultValue: "seeker",
        // The client sends the role during sign up, so it must stay writable.
        // The validator below is what keeps arbitrary values out of the DB.
        input: true,
        validator: {
          input: z.enum(ROLES),
        },
      },
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
})
