'use client'

import "./globals.css";

//IMPORT HEADER
import Header from "@/components/header"
//IMPORT FOOTER
import Footer from "@/components/footer";

import { Analytics } from "@vercel/analytics/react"

//FONT IMPORT
import localFont from 'next/font/local';
const archivo = localFont({
    src: [{
        path: '../public/fonts/Archivo-Regular.ttf',
        weight: '400'
    }],
    variable: '--font-archivo'
})

export const metadata = {
  title: "GMW Construct BE",
  description: "Construction et rénovations de toitures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="logo.png"></link>
        <meta name="description" content="Construction et rénovations de toitures."></meta>
        <meta name="keywords" content="GMW, Construct, Construction, Roofing, Toiture"></meta>
      </head>
      <body className={`${archivo.variable} antialiased`}>
        <Header></Header>
        {children}
        <Analytics/>
        <Footer></Footer>
      </body>
    </html>
  );
}
