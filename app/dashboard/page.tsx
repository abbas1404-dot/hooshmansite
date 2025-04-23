import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  BookOpen,
  BadgeIcon as Certificate,
  Clock,
  CreditCard,
  GraduationCap,
  BarChart3,
  Calendar,
  Award,
  Download,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">داشبورد</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">دوره‌های من</p>
                <p className="text-2xl font-bold">۳</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">گواهینامه‌ها</p>
                <p className="text-2xl font-bold">۲</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Certificate className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">ساعات آموزش</p>
                <p className="text-2xl font-bold">۴۸</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">پرداخت‌ها</p>
                <p className="text-2xl font-bold">۲</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">دوره‌های در حال یادگیری</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ml-3">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">برنامه‌نویسی پایتون پیشرفته</h3>
                        <p className="text-sm text-muted-foreground">استاد: دکتر علی محمدی</p>
                      </div>
                    </div>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">در حال انجام</span>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>پیشرفت دوره</span>
                      <span>۶۵٪</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link href="/dashboard/courses/1">
                      <Button variant="outline" size="sm">
                        ادامه دوره
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ml-3">
                        <BarChart3 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">یادگیری ماشین با پایتون</h3>
                        <p className="text-sm text-muted-foreground">استاد: دکتر رضا کریمی</p>
                      </div>
                    </div>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">در حال انجام</span>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>پیشرفت دوره</span>
                      <span>۳۰٪</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link href="/dashboard/courses/2">
                      <Button variant="outline" size="sm">
                        ادامه دوره
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">گواهینامه‌های من</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center ml-3">
                        <Award className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">ICDL مهارت‌های هفتگانه</h3>
                        <p className="text-sm text-muted-foreground">تاریخ صدور: ۱۴۰۲/۰۲/۱۵</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 ml-1" />
                      دانلود
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center ml-3">
                        <Award className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">فتوشاپ پیشرفته</h3>
                        <p className="text-sm text-muted-foreground">تاریخ صدور: ۱۴۰۱/۱۱/۲۰</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 ml-1" />
                      دانلود
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">رویدادهای آینده</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center ml-3 flex-shrink-0">
                    <Calendar className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">وبینار هوش مصنوعی</h3>
                    <p className="text-sm text-muted-foreground">۱۵ خرداد ۱۴۰۲ - ساعت ۱۸:۰۰</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      ثبت‌نام
                    </Button>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center ml-3 flex-shrink-0">
                    <Calendar className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">کارگاه طراحی UI/UX</h3>
                    <p className="text-sm text-muted-foreground">۲۰ خرداد ۱۴۰۲ - ساعت ۱۶:۰۰</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      ثبت‌نام
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">دوره‌های پیشنهادی</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-1">هوش مصنوعی و یادگیری عمیق</h3>
                  <p className="text-sm text-muted-foreground mb-2">تکمیل مسیر یادگیری هوش مصنوعی</p>
                  <div className="flex justify-end">
                    <Link href="/courses/ai-deep-learning">
                      <Button size="sm">مشاهده دوره</Button>
                    </Link>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-1">طراحی وب با React</h3>
                  <p className="text-sm text-muted-foreground mb-2">تکمیل مهارت‌های توسعه وب</p>
                  <div className="flex justify-end">
                    <Link href="/courses/react-web-development">
                      <Button size="sm">مشاهده دوره</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
