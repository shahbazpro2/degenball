import Header from '@/components/common/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AIDRIP',
  description: 'AIDRIP is a lottery game based on the Binance Smart Chain.',
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
