import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThirdwebProvider } from "thirdweb/react";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const codersCrux = localFont({ 
  src: './fonts/CodersCrux.ttf',  // Correct path from layout.tsx to fonts folder
  variable: '--font-coders-crux'
});
export const metadata: Metadata = {
  title: "Rupture Labs",
  description: "Rupture Labs",
  icons: {
    icon: "/favicon.ico",  // Add path to favicon here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-white scrollbar-track-black " lang="en">
      <body
        className={`${geistSans.variable}  ${codersCrux.variable} ${geistMono.variable} antialiased `}
      >
        <ThirdwebProvider>
        <Header/>
        {children}
        <Footer/>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
