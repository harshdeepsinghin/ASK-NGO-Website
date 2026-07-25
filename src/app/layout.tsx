import type { Metadata } from "next";
import { PT_Sans, Kalam } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Script from "next/script";
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

// Declared the basePath outside the component so metadata can use it
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Ardas Samaj Kalyan NGO",
  description: "Dedicated to social upliftment and community empowerment.",
  //  Explicitly force the favicon to load using the array format
  icons: [
    {
      rel: "icon",
      url: `${basePath}/favicon.ico`,
    },
  ],
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
        <Script id="dom-comment-signature" strategy="afterInteractive">
  {`
    if (!document.getElementById('developer-comment')) {
      const comment = document.createComment(" Engineered by Raunak Singh Negi | Spot a bug or have suggestions? Reach out: https://github.com/Raunak-Singh-Negi ");
      comment.id = 'developer-comment';
      document.body.appendChild(comment);
    }
  `}
</Script>
     <Script id="developer-signature" strategy="afterInteractive">
  {`
    console.log(
     "%cEngineered by Raunak Singh Negi\\n%cSpot a bug or have a suggestion? Reach out: https://github.com/Raunak-Singh-Negi",
      "color: #ea580c; font-size: 16px; font-weight: bold; font-family: sans-serif; padding: 4px 0;",
      "color: #666666; font-size: 12px; font-family: sans-serif; padding-top: 4px;"
    );
  `}
</Script>
      </body>
    </html>
  );
}