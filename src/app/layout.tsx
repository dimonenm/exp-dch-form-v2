import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { HeroUIProvider } from "@heroui/react"
import Header from './components/UI/Header'
import { Providers } from "./providers"

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
  preload: false
})


export const metadata: Metadata = {
  title: 'Форма о фактах происшествий'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="light" lang='en' >
      <body
        className={`light ${inter.variable} antialiased min-w-[900px] w-screen`}
      >
        <div className='flex flex-col h-screen'>
          <Providers >
          <Header/>
          {children}
        </Providers>
        </div>
      </body>
    </html>
  )
}
