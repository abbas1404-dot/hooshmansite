"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  CheckCircle,
  AlertCircle,
  Search,
  FileText,
  Download,
  ChevronRight,
  HelpCircle,
  Shield,
  CheckSquare,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CertificatesPage() {
  const [certificateCode, setCertificateCode] = useState("")
  const [nationalId, setNationalId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<"valid" | "invalid" | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate certificate verification
    setTimeout(() => {
      // For demo purposes, we'll validate if both fields have values
      if (certificateCode.length >= 10 && nationalId.length === 10) {
        setResult("valid")
      } else {
        setResult("invalid")
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full transform translate-x-1/3 -translate-y-1/3 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full transform -translate-x-1/3 translate-y-1/3 -z-10"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="breadcrumbs">
            <Link href="/" className="breadcrumb-item">
              خانه
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span>استعلام گواهینامه</span>
          </div>

          <div className="text-center mb-16 relative">
            <div className="inline-block relative">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-secondary/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/20 rounded-full"></div>
              <h1 className="seo-title text-4xl relative z-10">استعلام گواهینامه فنی و حرفه‌ای</h1>
            </div>
            <p className="seo-description relative z-10">
              برای استعلام اصالت گواهینامه، کد گواهینامه و کد ملی دارنده گواهینامه را وارد کنید
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-secondary/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

            <CardHeader className="relative z-10">
              <div className="flex items-center mb-2">
                <Shield className="h-6 w-6 text-primary ml-2" />
                <CardTitle className="text-xl text-primary">فرم استعلام گواهینامه</CardTitle>
              </div>
              <CardDescription>اطلاعات گواهینامه مورد نظر را وارد کنید</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <Label htmlFor="certificateCode" className="text-base">
                    کد گواهینامه
                  </Label>
                  <div className="relative">
                    <Input
                      id="certificateCode"
                      placeholder="کد گواهینامه را وارد کنید"
                      value={certificateCode}
                      onChange={(e) => setCertificateCode(e.target.value)}
                      className="pl-10 border-gray-300 focus:border-primary transition-colors duration-300"
                      required
                    />
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationalId" className="text-base">
                    کد ملی دارنده گواهینامه
                  </Label>
                  <div className="relative">
                    <Input
                      id="nationalId"
                      placeholder="کد ملی را وارد کنید"
                      value={nationalId}
                      onChange={(e) => setNationalId(e.target.value)}
                      className="pl-10 border-gray-300 focus:border-primary transition-colors duration-300"
                      required
                    />
                    <CheckSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white transition-all duration-300 group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "در حال بررسی..."
                  ) : (
                    <span className="flex items-center group-hover:pr-2">
                      <Search className="mr-2 h-5 w-5" /> استعلام گواهینامه
                      <ChevronRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          {result === "valid" && (
            <div className="mt-8 space-y-6 animate-fade-in">
              <Alert className="border-green-500 bg-green-50 dark:bg-green-900/20 shadow-md">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <AlertTitle className="text-green-600 dark:text-green-400 font-bold">گواهینامه معتبر است</AlertTitle>
                <AlertDescription>
                  گواهینامه مورد نظر در سیستم سازمان فنی و حرفه‌ای ثبت شده و معتبر می‌باشد.
                </AlertDescription>
              </Alert>

              <Card className="border-0 shadow-xl overflow-hidden bg-white">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200">
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-green-600 ml-2" />
                    <CardTitle className="text-lg text-green-700">اطلاعات گواهینامه</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-lg -z-10"></div>
                      <div className="space-y-4 relative z-10 p-4">
                        <div>
                          <p className="text-sm text-muted-foreground">نام و نام خانوادگی:</p>
                          <p className="font-medium text-lg">علی محمدی</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">کد ملی:</p>
                          <p className="font-medium text-lg">{nationalId}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">عنوان دوره:</p>
                          <p className="font-medium text-lg">برنامه‌نویسی پایتون پیشرفته</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">تاریخ صدور:</p>
                          <p className="font-medium text-lg">۱۴۰۲/۰۶/۱۵</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gray-50 to-white rounded-lg -z-10"></div>
                      <div className="space-y-4 relative z-10 p-4">
                        <div>
                          <p className="text-sm text-muted-foreground">شماره گواهینامه:</p>
                          <p className="font-medium text-lg">{certificateCode}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">نمره:</p>
                          <p className="font-medium text-lg">۹۲ از ۱۰۰</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">مرکز صادرکننده:</p>
                          <p className="font-medium text-lg">آموزشگاه فنی و حرفه‌ای هوشمان</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">اعتبار:</p>
                          <p className="font-medium text-lg text-green-600">دارای اعتبار</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t flex justify-between items-center">
                    <div className="flex items-center">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="مهر سازمان فنی و حرفه‌ای"
                        width={60}
                        height={60}
                        className="ml-2"
                      />
                      <div>
                        <p className="text-sm text-muted-foreground">تایید شده توسط سازمان فنی و حرفه‌ای کشور</p>
                        <p className="text-xs text-muted-foreground">
                          کد استعلام: {Math.random().toString(36).substring(2, 10).toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-secondary text-white transition-all duration-300 group">
                      <span className="flex items-center">
                        <Download className="ml-2 h-4 w-4" /> دانلود گواهینامه
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {result === "invalid" && (
            <Alert className="mt-8 border-destructive bg-destructive/10 animate-fade-in shadow-md">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <AlertTitle className="text-destructive font-bold">گواهینامه نامعتبر است</AlertTitle>
              <AlertDescription>
                گواهینامه مورد نظر در سیستم سازمان فنی و حرفه‌ای یافت نشد. لطفاً اطلاعات را مجدداً بررسی کنید.
              </AlertDescription>
            </Alert>
          )}

          <div className="mt-16 p-8 bg-white rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-secondary/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="flex items-center mb-6 relative z-10">
              <HelpCircle className="h-6 w-6 text-primary ml-2" />
              <h2 className="text-xl font-bold">راهنمای استعلام گواهینامه</h2>
            </div>
            <ul className="space-y-4 list-none relative z-10">
              {[
                "کد گواهینامه روی مدرک فنی و حرفه‌ای درج شده است.",
                "کد ملی باید مربوط به دارنده گواهینامه باشد.",
                "در صورت هرگونه مغایرت، گواهینامه نامعتبر تلقی می‌شود.",
                "برای استعلام گواهینامه‌های قدیمی که فاقد کد هستند، با پشتیبانی تماس بگیرید.",
                "گواهینامه‌های صادر شده توسط آکادمی دارای هولوگرام امنیتی و QR کد می‌باشند.",
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center ml-3 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
