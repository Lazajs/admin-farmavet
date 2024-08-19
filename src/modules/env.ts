import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

const env = {
  NEXT_PUBLIC_SUPABASE_URL_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
}

const envVars = Object.values(env)

if (envVars.includes(undefined)) {
  console.log(env)
  throw new Error('Missing env variables')
}

export default env as Record<string, string>
