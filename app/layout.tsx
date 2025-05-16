import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://study-quest-woad.vercel.app"),
  title: "StudyQuest - Exam Preparation",
  description: "A modern platform to organize and study your exam questions",
  generator: "Next.js",
  applicationName: "StudyQuest",
  icons: {
    icon: "https://study-quest-woad.vercel.app/herophoto.png",
    shortcut: "https://study-quest-woad.vercel.app/herophoto.png",
    apple: "https://study-quest-woad.vercel.app/herophoto.png",
  },
  openGraph: {
    title: "StudyQuest - Exam Preparation",
    description: "A modern platform to organize and study your exam questions",
    url: "https://study-quest-woad.vercel.app/",
    images: [
      {
        url: "https://study-quest-woad.vercel.app/herophoto.png",
        width: 1200,
        height: 630,
        alt: "StudyQuest - Exam Preparation",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}