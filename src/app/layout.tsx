import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import Preloader from "@/components/animation/preloader/Preloader";

import ScrollToTopButton from "@/components/common/scroll to top/ScrollToText";
import { AuthProvider } from "@/contextProvider/ContextProvider";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "This is a school management website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Preloader>
            <Navbar></Navbar>
            {children}
            <Footer />
            <ScrollToTopButton />
          </Preloader>
        </AuthProvider>
      </body>
    </html>
  );
}
