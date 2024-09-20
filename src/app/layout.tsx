import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";


import ScrollToTopButton from "@/components/common/scroll to top/ScrollToText";
import { AuthProvider } from "@/contextProvider/ContextProvider";
import Tanstack from "@/utils/Tanstack";

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
  title: "Starlight University",
  description: "A comprehensive university management website designed to streamline administrative tasks, enhance student engagement, and improve overall efficiency. Features include course management, student information systems, faculty portals, and real-time communication tools.",
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
          <Tanstack>
      
              <Navbar></Navbar>
              {children}
              <Footer />
              <ScrollToTopButton />
   
          </Tanstack>
        </AuthProvider>
      </body>
    </html>
  );
}
