import localFont from "next/font/local"

export const vollkorn = localFont({
  variable: "--vollkorn",
  src: [
    {
      path: './fonts/Vollkorn/Vollkorn-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Vollkorn/Vollkorn-Bold.woff2',
      weight: "bold",
      style: 'normal',
    }
  ]
})

