import {createContext} from 'react'
import { IProduct } from '@/interfaces/Product.interface'

interface CTX {
  products: IProduct[] | null
  page: number
  goToPage: (x: number) => void
  isLoading: boolean
  count: number
}

export const ProductCTX = createContext<CTX>({} as CTX)