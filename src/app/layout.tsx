import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import {HeroUIProvider} from "@heroui/react";

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
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      ><HeroUIProvider>{children}</HeroUIProvider>

      </body>
    </html>
  )
}
