export interface IProduct {
  id: string
  name: string
  code: string
  image?:string
  unit_price: number
  activated: boolean
  provider: {
    name: string
  }
  type: {
    name: string 
  }
}