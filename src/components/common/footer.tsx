import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
               <Image src="/logo.png" alt="Ardas Samaj Kalyan Logo" width={45} height={12} className="object-contain" />
                <span className="font-logo-text text-xl font-bold text-foreground">
                  Ardas Samaj Kalyan
                </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              A non-profit organization committed to empowering marginalized communities through education, skill development, and comprehensive support.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
              <li><Link href="/get-involved" className="hover:text-primary transition-colors">Get Involved</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary shrink-0" />
                <span>33/4/1 Patel Nagar, Saharanpur Road, Dehradun, Uttarakhand</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:asktrust.in@gmail.com" className="hover:text-primary transition-colors">asktrust.in@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+917017075603" className="hover:text-primary transition-colors">+91 7017075603</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {year} Ardas Samaj Kalyan NGO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
