'use client'
import { IProduct } from '@/interfaces/Product.interface'
import { useState } from 'react'
import ProductImage from './ProductImage'
import { Icons } from '@/components/Icons'

const { Trash, Edit } = Icons

export default function Product(props: IProduct) {
  const [data, setData] = useState<IProduct>(props)
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  })

  return (
    <div className="flex items-center w-full h-[154px] m-auto border-creamy border-[2px] border-solid rounded-[20px]">
      <div className="flex h-full w-fit">
        <span className="w-[144px] h-[144px] overflow-hidden rounded-[20px]">
          <ProductImage code={data.code} styles="h-full w-auto object-cover" />
        </span>
        <span className="h-full flex flex-col justify-evenly py-[20px]">
          <p className="text-xs font-medium">{data.provider.name}</p>
          <p className="text-sm font-bold">{data.type.name}</p>
          <p>{data.name}</p>
        </span>
      </div>

      <div className="ml-auto min-w-[400px] flex items-center font-bold text-base">
        <p>{formatter.format(+props.unit_price.toFixed(2))}</p>
        <span className="flex items-center ml-auto gap-[30px] mr-[50px]">
          <Edit />
          <span className="border-r-[2px] border-r-creamy h-[45px] w-[10px]"></span>
          <Trash className="scale-[204%]" />
        </span>
      </div>
    </div>
  )
}
