import './globals.css'
import { Inter } from 'next/font/google'

import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"))
const Footer = dynamic(() => import("@/components/Footer/Footer"))


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Otak Logika',
  description: 'Our approach to developing and harnessing artificial intelligence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
