"use client"

import type React from "react"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <style jsx global>{`
          @font-face {
            font-family: 'Modam Pro';
            src: url('/fonts/modam-pro/ModamWeb-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Modam Pro';
            src: url('/fonts/modam-pro/ModamWeb-Bold.woff2') format('woff2');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          
          html, body {
            font-family: 'Modam Pro', sans-serif;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-background antialiased">
        <ScrollDetector />
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  )
}

// Component to detect scroll and add 'scrolled' class to body
function ScrollDetector() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
              document.body.classList.add('scrolled');
            } else {
              document.body.classList.remove('scrolled');
            }
          });
        `,
      }}
    />
  )
}
