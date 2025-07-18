import type { Metadata } from "next";
import { PT_Sans, Kalam } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";


const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
});

const edo = localFont({
  src: '../../public/fonts/edo.ttf',
  variable: '--font-edo',
});


export const metadata: Metadata = {
  title: "Ardas Samaj Kalyan NGO",
  description: "Dedicated to social upliftment and community empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "font-body bg-background text-foreground antialiased flex flex-col min-h-screen",
        ptSans.variable,
        kalam.variable,
        edo.variable
      )}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
