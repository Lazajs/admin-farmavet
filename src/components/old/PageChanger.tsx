'use client'
import useProducts from "../hooks/useProducts"

const Arrow = () => <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" fill="none"><path fill="#545454" d="M.0007 10.2112v-8.42a1.76 1.76 0 0 1 1-1.59 2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.76 1.76 0 0 1 0 2.66l-5.1 4.21a2.1003 2.1003 0 0 1-2.21.26 1.7604 1.7604 0 0 1-1-1.59Z"/></svg>

export default function PageChanger() {
  const {goToPage, page, count} = useProducts()
  const shownPages: number[] = Array.from({length: 5})

  for (let i = 1; i <= 5; i++) {
    shownPages[i] = page + (5 - i)
    if (i === 5) {
      shownPages.sort((a,b) => a-b)
    }
  }
  
  const handleClick = (num: number) => {
    goToPage(num)
  }

  return (
    <div className="flex items-center font-bold justify-between gap-2 text-sm w-[250px] max-w m-auto mb-auto mt-10">
      <span onClick={() => page !== 1 ? handleClick(page-1) : ''} className={`${page === 1 ? 'opacity-40 cursor-default' : ''} cursor-pointer rotate-180`}><Arrow /></span>     
      {
        shownPages.map((value: number) => {
          return <p onClick={() => handleClick(value)} key={value} className={`cursor-pointer ${page === value ? 'text-primary' : ''}`}>{value}</p>
        })
      }
      <p className="cursor-default">...</p>
      <p onClick={() => handleClick(count)} className={`cursor-pointer ${page === count ? 'text-primary' : ''}`}>{count}</p>
      <span onClick={() => page !== count ? handleClick(page+1) : ''} className={`${page === count ? 'opacity-40 cursor-default' : ''} cursor-pointer`}><Arrow /></span>     
    </div>
  )

}