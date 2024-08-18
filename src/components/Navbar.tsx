'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()
  const isPath = (path: string) => path === pathname

  return (
    <header className="w-scren">
      <div className="mt-[20px] w-fit md:h-[80px] h-[100px] bg-softWhite m-auto rounded-[20px] flex flex-col md:flex-row justify-around items-center text-xl font-medium">
        <Link
          href={'/dashboard/products'}
          className={`flex items-center h-full ${
            !isPath('/dashboard/products') &&
            'hover:bg-slate-100 rounded-[20px]'
          }`}
        >
          <div
            className={
              isPath('/dashboard/products')
                ? 'activeLink flex items-center w-[300px] justify-center'
                : 'flex items-center w-[300px] justify-center'
            }
          >
            Productos
          </div>
        </Link>
        <Link
          href={'/dashboard/orders'}
          className={`flex items-center h-full ${
            !isPath('/dashboard/orders') && 'hover:bg-slate-100 rounded-[20px]'
          }`}
        >
          <div
            className={
              isPath('/dashboard/orders')
                ? 'activeLink flex items-center w-[300px] justify-center'
                : 'flex items-center w-[300px] justify-center'
            }
          >
            Ordenes
          </div>
        </Link>
      </div>
    </header>
  )
}
