/**
 *  @fileoverview Products page => admin dashboard
 */
import { getProductList } from '@/modules/supabase'

export default async function Products() {
  const { data, error } = await getProductList()
  console.log(data)
  return <h1>hola MainWrapper</h1>
}
