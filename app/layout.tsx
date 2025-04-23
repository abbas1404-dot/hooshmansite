import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "آموزشگاه تخصصی هوشمان | آموزش، معرفی و استخدام",
  description: "آموزش عمیق، اصولی و کامل دیجیتال مارکتینگ و ورود سریع به بازار کار با آموزشگاه تخصصی هوشمان",
  keywords: "دیجیتال مارکتینگ، آموزش، استخدام، بازاریابی دیجیتال، سئو، شبکه‌های اجتماعی",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'