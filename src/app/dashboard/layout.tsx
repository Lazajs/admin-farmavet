/**
 * @fileoverview Layout for admin dashboard, includes shared navbar
 */

import { Brandbar } from '@/components/Brandbar'
import { Navbar } from '@/components/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Brandbar />
      <Navbar />
      <section>{children}</section>
    </div>
  )
}
