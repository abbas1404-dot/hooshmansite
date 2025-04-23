import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">آموزشگاه تخصصی فنی و حرفه‌ای هوشمان</h3>
            <p className="text-muted-foreground mb-4">
              آموزش تخصصی دوره‌های فناوری اطلاعات با مدرک رسمی سازمان فنی و حرفه‌ای
            </p>
            <div className="flex space-x-3 space-x-reverse">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-gray-600" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-gray-600" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-gray-600" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition">
                  دوره‌های آموزشی
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-muted-foreground hover:text-primary transition">
                  استعلام گواهینامه
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="text-muted-foreground hover:text-primary transition">
                  اساتید
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">۰۲۱-۸۸۷۷۶۶۵۵</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">info@hooshman.ir</span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  تهران، خیابان ولیعصر، بالاتر از میدان ونک، ساختمان آموزشگاه هوشمان
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">خبرنامه</h3>
            <p className="text-muted-foreground mb-4">
              برای اطلاع از آخرین دوره‌ها و تخفیف‌های ویژه در خبرنامه ما عضو شوید
            </p>
            <div className="flex space-x-2 space-x-reverse">
              <Input type="email" placeholder="ایمیل خود را وارد کنید" className="max-w-xs" />
              <Button className="bg-primary hover:bg-primary/90 text-white">عضویت</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} آموزشگاه تخصصی فنی و حرفه‌ای هوشمان. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
