import localFont from "next/font/local"

// Define the Modam Pro font
export const modamPro = localFont({
  src: [
    {
      path: "./modam-pro/ModamWeb-ExtraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./modam-pro/ModamWeb-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./modam-pro/ModamWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./modam-pro/ModamWeb-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./modam-pro/ModamWeb-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./modam-pro/ModamWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./modam-pro/ModamWeb-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./modam-pro/ModamWeb-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-modam-pro",
  display: "swap",
})
