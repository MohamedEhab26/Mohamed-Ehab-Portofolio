import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohamed Ehab - Software Engineer & Frontend Developer",
  description:
    "Portfolio of Mohamed Ehab, a Software Engineer, Frontend Developer, and Part-Time Software Tester based in Alexandria, Egypt. Specializing in Flutter, FlutterFlow, and modern frontend technologies.",
  keywords: "Mohamed Ehab, Software Engineer, Frontend Developer, Flutter, FlutterFlow, Alexandria Egypt, Portfolio",
  authors: [{ name: "Mohamed Ehab" }],
  openGraph: {
    title: "Mohamed Ehab - Software Engineer & Frontend Developer",
    description:
      "Portfolio of Mohamed Ehab, a Software Engineer, Frontend Developer, and Part-Time Software Tester based in Alexandria, Egypt.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
