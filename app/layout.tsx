import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "We Can Voice Trust - Empowering Voices, Changing Lives",
  description:
    "We Can Voice Trust is dedicated to amplifying unheard voices and creating positive change in communities worldwide through education, advocacy, and empowerment programs.",
  keywords: "nonprofit, community, empowerment, advocacy, social justice, education, mental health, microfinance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
