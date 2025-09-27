import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { HabitModeProvider } from "@/components/context/habit-mode-context"
import ThemeScript from "@/components/theme/theme-script"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "GlideTask - Balanced Productivity for You",
  description:
    "A comprehensive productivity application that combines task management, progress tracking, and habit formation in one intuitive platform.",
  generator: "v0.app",
  icons: {
    icon: "/images/glidetask-logo.png",
    shortcut: "/images/glidetask-logo.png",
    apple: "/images/glidetask-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeScript />
        <HabitModeProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </HabitModeProvider>
        <Analytics />
      </body>
    </html>
  )
}
