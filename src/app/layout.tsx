/**
 * @fileoverview Acts as middleware, decide if admin is logged in or not
 *
 */
import { redirect } from 'next/navigation'

import type { Metadata } from 'next'
import './globals.css'
import { montserrat } from '../utils/fonts'

export const metadata: Metadata = {
  title: 'Farmavet Admin',
  description: 'Farmavet admin'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
