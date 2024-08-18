import Image from 'next/image'

export function Brandbar() {
  return (
    <nav className="w-screen h-[80px] bg-primary flex items-center justify-center md:justify-normal md:pl-[20px]">
      <Image
        src={'/logofarmavetwhite.svg'}
        width={230}
        height={60}
        alt="logo"
      />
    </nav>
  )
}
