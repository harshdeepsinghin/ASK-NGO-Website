"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/partners", label: "Partners" },
  { href: "/legal", label: "Legal" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          "text-md font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground",
          className
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
               <Image src="./logo.png" alt="Ardas Samaj Kalyan Logo" width={40} height={10} className="object-contain" priority/>
           <span className="font-logo-text text-xl font-bold text-foreground inline-block">
            Ardas Samaj Kalyan
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/get-involved">Get Involved</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                 <div className="mb-6">
                   <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                      <Image src="./logo.png" alt="Ardas Samaj Kalyan Logo" width={40} height={10} className="object-contain" priority/>
                      <span className="ml-2 text-xs font-semibold text-foreground">
                        ARDAS SAMAJ KALYAN
                      </span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} className="text-xl"/>
                  ))}
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                    <Link href="/get-involved" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
