import env from './env'

import { SupabaseClient } from '@supabase/supabase-js'

export async function getSupaClient() {
  const client = new SupabaseClient(
    env.NEXT_PUBLIC_SUPABASE_URL_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  return client
}

export async function getProductList() {
  const client = await getSupaClient()
  const { data, error } = await client.from('Products').select('*').limit(10)
  console.log(data)
  return ''
}
