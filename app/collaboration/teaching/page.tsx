import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, FileText, Upload } from "lucide-react"
import Image from "next/image"

export default function TeachingCollaborationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">همکاری در تدریس</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            به تیم مدرسین آموزشگاه تخصصی هوشمان بپیوندید و در ارتقای سطح دانش و مهارت علاقه‌مندان سهیم باشید
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">فرم درخواست همکاری</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">نام</Label>
                    <Input id="firstName" placeholder="نام خود را وارد کنید" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">نام خانوادگی</Label>
                    <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">ایمیل</Label>
                    <Input id="email" type="email" placeholder="example@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">شماره تماس</Label>
                    <Input id="phone" placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">آخرین مدرک تحصیلی</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="مدرک تحصیلی خود را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diploma">دیپلم</SelectItem>
                      <SelectItem value="associate">کاردانی</SelectItem>
                      <SelectItem value="bachelor">کارشناسی</SelectItem>
                      <SelectItem value="master">کارشناسی ارشد</SelectItem>
                      <SelectItem value="phd">دکترا</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teachingFields">زمینه‌های تدریس</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="زمینه تدریس خود را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="icdl">ICDL و آفیس</SelectItem>
                      <SelectItem value="design">طراحی گرافیک</SelectItem>
                      <SelectItem value="web">طراحی و توسعه وب</SelectItem>
                      <SelectItem value="programming">برنامه‌نویسی</SelectItem>
                      <SelectItem value="data-science">علوم داده و هوش مصنوعی</SelectItem>
                      <SelectItem value="digital-marketing">دیجیتال مارکتینگ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">سابقه تدریس</Label>
                  <Textarea id="experience" placeholder="لطفاً سوابق تدریس خود را به طور خلاصه بیان کنید" rows={4} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">آپلود رزومه</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-1">فایل رزومه خود را اینجا بکشید یا کلیک کنید</p>
                    <p className="text-xs text-gray-400">فرمت‌های مجاز: PDF, DOCX (حداکثر ۵ مگابایت)</p>
                    <input type="file" className="hidden" accept=".pdf,.docx" />
                  </div>
                </div>

                <div className="flex items-start space-x-2 space-x-reverse">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      با قوانین و مقررات همکاری با آموزشگاه هوشمان موافقم
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  ارسال درخواست همکاری
                </Button>
              </form>
            </div>
          </div>

          <div>
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500&query=teaching class"
                  alt="همکاری در تدریس"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">مزایای همکاری با ما</h3>
                <ul className="space-y-3">
                  {[
                    "همکاری با معتبرترین آموزشگاه تخصصی فنی و حرفه‌ای",
                    "درآمد مناسب و پرداخت به موقع",
                    "امکان تدریس آنلاین و حضوری",
                    "ارتقای رزومه کاری و شبکه‌سازی حرفه‌ای",
                    "دسترسی به امکانات آموزشی پیشرفته",
                    "انعطاف‌پذیری در زمان‌بندی کلاس‌ها",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 ml-2">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold mb-3">مدارک مورد نیاز</h3>
                  <ul className="space-y-2">
                    {[
                      "رزومه کاری به‌روز",
                      "تصویر آخرین مدرک تحصیلی",
                      "گواهینامه‌های تخصصی مرتبط",
                      "نمونه کارها و پروژه‌های قبلی (در صورت وجود)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 ml-2">
                          <FileText className="h-3 w-3 text-gray-500" />
                        </div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">سوالات متداول</h2>
          <div className="space-y-6">
            {[
              {
                question: "شرایط همکاری با آموزشگاه هوشمان چیست؟",
                answer:
                  "برای همکاری با آموزشگاه هوشمان، داشتن تخصص و تجربه کافی در زمینه تدریس، مدرک تحصیلی مرتبط و توانایی انتقال مفاهیم به صورت کاربردی ضروری است. پس از بررسی رزومه، از متقاضیان واجد شرایط برای مصاحبه دعوت خواهد شد.",
              },
              {
                question: "آیا امکان تدریس به صورت آنلاین وجود دارد؟",
                answer:
                  "بله، آموزشگاه هوشمان امکان تدریس به صورت آنلاین و حضوری را فراهم کرده است. مدرسین می‌توانند بر اساس شرایط و توافق، به یکی از دو صورت یا ترکیبی از هر دو روش به تدریس بپردازند.",
              },
              {
                question: "نحوه پرداخت حق‌الزحمه مدرسین چگونه است؟",
                answer:
                  "حق‌الزحمه مدرسین بر اساس سطح تخصص، تجربه، ساعات تدریس و نوع دوره محاسبه می‌شود. پرداخت‌ها به صورت ماهانه و از طریق واریز به حساب بانکی انجام می‌شود.",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
