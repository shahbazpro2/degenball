
import Header from '@/components/common/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Degenball',
  description: 'Degenball is a decentralized sports betting platform.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header props={children} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
