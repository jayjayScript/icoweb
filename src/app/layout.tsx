import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Icoweb Agency",
  description: "ICOWEB creates high-performing websites, mobile apps, and digital solutions for businesses across Nigeria and beyond. Driven by design, powered by code, delivering results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
