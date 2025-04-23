import { CheckCircle, Award, Building, Briefcase, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CertificationInfo() {
  return (
    <section className="certification-section py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full transform translate-x-1/3 -translate-y-1/3 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full transform -translate-x-1/3 translate-y-1/3 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-secondary/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/20 rounded-full"></div>
            <h2 className="seo-title relative z-10">مدارک رسمی فنی و حرفه‌ای</h2>
          </div>
          <p className="seo-description relative z-10">
            مزایای شرکت در دوره‌های آموزشی آموزشگاه هوشمان با مدرک رسمی سازمان فنی و حرفه‌ای
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="h-10 w-10 text-primary" />,
              title: "مدرک معتبر بین‌المللی",
              description:
                "مدارک فنی و حرفه‌ای دارای اعتبار بین‌المللی بوده و در بیش از ۱۹۰ کشور جهان قابل ترجمه و ارزشیابی می‌باشند.",
            },
            {
              icon: <Building className="h-10 w-10 text-primary" />,
              title: "امکانات آموزشی پیشرفته",
              description:
                "کلاس‌های مجهز به تجهیزات آموزشی مدرن، آزمایشگاه‌های کامپیوتری پیشرفته و فضای آموزشی استاندارد برای یادگیری بهتر.",
            },
            {
              icon: <Briefcase className="h-10 w-10 text-primary" />,
              title: "ورود به بازار کار",
              description:
                "ارتباط مستقیم با شرکت‌های معتبر و معرفی دانشجویان برتر به بازار کار با ضمانت استخدام در دوره‌های پیشرفته.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <CardContent className="p-8 flex flex-col items-center text-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-secondary/5 rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-secondary/10 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-primary/10 rounded-full"></div>

          <Card className="border-0 shadow-xl overflow-hidden bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                <h3 className="text-2xl font-bold mb-6 relative">
                  <span className="relative z-10">مدارک رسمی فنی و حرفه‌ای</span>
                  <span className="absolute bottom-0 left-0 h-3 w-20 bg-secondary/20 -z-10"></span>
                </h3>
                <p className="text-muted-foreground mb-8">
                  تمامی دوره‌های آموزشگاه هوشمان دارای مدرک رسمی از سازمان فنی و حرفه‌ای کشور می‌باشند که در استخدام و
                  ادامه تحصیل دارای ارزش و اعتبار است.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "قابل استعلام از سایت رسمی سازمان فنی و حرفه‌ای",
                    "دارای اعتبار در تمامی مراکز دولتی و خصوصی",
                    "قابل ترجمه و دارای ارزش بین‌المللی",
                    "دارای امتیاز در آزمون‌های استخدامی",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center ml-3 group-hover:bg-green-200 transition-colors duration-300">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="group-hover:text-primary transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link href="/certificates" className="group">
                    <Button className="bg-primary hover:bg-secondary text-white transition-all duration-300 group-hover:pr-6">
                      استعلام گواهینامه
                      <ChevronRight className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="گواهینامه فنی و حرفه‌ای"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
