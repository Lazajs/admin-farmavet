'use client'
import { ProductCTX } from "../context/ProductCTX"
import { useContext } from "react"

export default function useProducts () {
  return useContext(ProductCTX)
}