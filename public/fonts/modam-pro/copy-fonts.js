// این فایل را اجرا کنید تا فونت‌ها از مسیر app/fonts/modam-pro به public/fonts/modam-pro کپی شوند
const fs = require("fs")
const path = require("path")

const sourceDir = path.join(__dirname, "../../../app/fonts/modam-pro")
const destDir = path.join(__dirname)

// اطمینان از وجود پوشه مقصد
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true })
}

// خواندن فایل‌های پوشه منبع
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error("خطا در خواندن پوشه منبع:", err)
    return
  }

  // کپی هر فایل به پوشه مقصد
  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file)
    const destPath = path.join(destDir, file)

    fs.copyFile(sourcePath, destPath, (err) => {
      if (err) {
        console.error(`خطا در کپی فایل ${file}:`, err)
        return
      }
      console.log(`فایل ${file} با موفقیت کپی شد.`)
    })
  })
})
