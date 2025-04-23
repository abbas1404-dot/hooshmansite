"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  User,
  Book,
  BadgeIcon as Certificate,
  ShoppingCart,
  CreditCard,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  const sidebarLinks = [
    { href: "/dashboard", label: "داشبورد", icon: <Home className="h-5 w-5 ml-2" /> },
    { href: "/dashboard/profile", label: "پروفایل", icon: <User className="h-5 w-5 ml-2" /> },
    { href: "/dashboard/courses", label: "دوره‌های من", icon: <Book className="h-5 w-5 ml-2" /> },
    { href: "/dashboard/certificates", label: "گواهینامه‌ها", icon: <Certificate className="h-5 w-5 ml-2" /> },
    { href: "/dashboard/cart", label: "سبد خرید", icon: <ShoppingCart className="h-5 w-5 ml-2" /> },
    { href: "/dashboard/payments", label: "پرداخت‌ها", icon: <CreditCard className="h-5 w-5 ml-2" /> },
    { href: "/dashboard/messages", label: "پیام‌ها", icon: <MessageSquare className="h-5 w-5 ml-2" /> },
    { href: "/dashboard/settings", label: "تنظیمات", icon: <Settings className="h-5 w-5 ml-2" /> },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <Button variant="outline" size="icon" onClick={toggleSidebar} className="bg-white">
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:relative lg:w-64 lg:flex-shrink-0`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-primary">پنل کاربری</h2>
            <p className="text-sm text-muted-foreground">خوش آمدید، کاربر گرامی</p>
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`dashboard-sidebar-link ${pathname === link.href ? "active" : ""}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={() => setIsSidebarOpen(false)}
            >
              <LogOut className="h-5 w-5 ml-2" />
              <span>خروج از حساب</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">{children}</div>
    </div>
  )
}
