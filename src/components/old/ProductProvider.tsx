'use client'
import { ProductCTX } from "../context/ProductCTX";
import { IProduct } from "@/interfaces/Product.interface"
import { useEffect, useState, useMemo } from "react"

interface Props {
  products: IProduct[]
}


export default function ProductProvider ({children, count}: {children: React.ReactNode, count: number}) {
  const [products, setProducts] = useState<IProduct[] | null>(null) // initialize
  const [page, setPage] = useState(1) 
  const [isLoading, setIsLoading] = useState(false) 

  const shownProducts = useMemo(()=>{
    const slice = (page*3)-3
    if (!products) return null
    return products.slice(slice , slice+3)
  }, [page, products])
  console.log(products)

  useEffect(()=>{
    if (!products ) {
      setIsLoading(true)
      fetch(`/products/api`)
        .then(res => res.ok ? res.json() : res)
        .then(data => setProducts(prevProds => data))
        .finally(()=> setIsLoading(false))
    }
    
    if (products && products.length < page*3) {
      setIsLoading(true)

      fetch(`/products/api?offset=${page*3}`)
        .then(res => res.ok ? res.json() : res)
        .then(data => setProducts(prevProds => {
          if (!prevProds) return prevProds
          const temp = structuredClone(prevProds)

          data.forEach((itemFetched: IProduct, i: number) => {
            if (itemFetched) temp[page+(i-1)] = itemFetched
          })

          return temp
        }))
        .finally(()=> setIsLoading(false))
    }
  }, [page])


  const goToPage = (num: number) => {setPage(num || 1)} 

  return (
    <ProductCTX.Provider value={{products: shownProducts, page, goToPage, isLoading, count }}>
      {children}
    </ProductCTX.Provider>
  )
}