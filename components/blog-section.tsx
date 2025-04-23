import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "چگونه با یادگیری هوش مصنوعی آینده شغلی خود را تضمین کنیم؟",
    excerpt:
      "در این مقاله به بررسی اهمیت یادگیری هوش مصنوعی و تاثیر آن بر آینده مشاغل می‌پردازیم و مسیر یادگیری را توضیح می‌دهیم.",
    image: "/placeholder.svg?height=200&width=400",
    date: "۱۴۰۲/۰۳/۱۵",
    author: "دکتر علی محمدی",
    slug: "ai-career-future",
  },
  {
    id: 2,
    title: "معرفی بهترین منابع آموزشی برای یادگیری طراحی وب",
    excerpt: "در این مقاله بهترین منابع آموزشی برای یادگیری طراحی وب از مبتدی تا پیشرفته را معرفی می‌کنیم.",
    image: "/placeholder.svg?height=200&width=400",
    date: "۱۴۰۲/۰۲/۲۰",
    author: "مهندس سارا احمدی",
    slug: "best-web-design-resources",
  },
  {
    id: 3,
    title: "مقایسه مدارک فنی و حرفه‌ای با سایر مدارک بین‌المللی",
    excerpt: "در این مقاله به مقایسه مدارک فنی و حرفه‌ای با سایر مدارک بین‌المللی در حوزه IT می‌پردازیم.",
    image: "/placeholder.svg?height=200&width=400",
    date: "۱۴۰۲/۰۱/۱۰",
    author: "دکتر محمد رضایی",
    slug: "comparing-it-certificates",
  },
]

export default function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="seo-title">آخرین مقالات وبلاگ</h2>
          <p className="seo-description">مقالات آموزشی و کاربردی در حوزه فناوری اطلاعات و برنامه‌نویسی</p>
        </div>
        <Link href="/blog" className="mt-4 md:mt-0">
          <Button variant="outline">مشاهده همه مقالات</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card">
            <div className="blog-card-image">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 ml-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 ml-1" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
