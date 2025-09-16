"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  imageSrc?: string; // optional image
};

const defaultItems: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "ASK Trust’s programs helped our community during tough times—grateful for the support and guidance.",
    name: "Priya S.",
    role: "Parent",
    imageSrc: "/images/testimonial-1.jpg",
  },
  {
    id: "t2",
    quote:
      "The awareness sessions were eye-opening. Our students are now safer and more confident online.",
    name: "R. Kumar",
    role: "Teacher",
    imageSrc: "/images/testimonial-2.jpg",
  },
];

export function Testimonials({ items = defaultItems, showText = true }: { items?: TestimonialItem[]; showText?: boolean }) {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-2xl md:text-3xl font-semibold text-center">Testimonials</h2>
        <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">
          Voices from our beneficiaries, partners, and volunteers.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <Dialog key={t.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden h-full flex flex-col cursor-zoom-in">
                  {t.imageSrc ? (
                    <div className="relative">
                      <Image
                        src={t.imageSrc}
                        alt={t.name ? t.name : "Testimonial"}
                        width={600}
                        height={400}
                        className="h-48 w-full object-cover"
                        priority={false}
                      />
                    </div>
                  ) : null}
                  {showText && (
                    <>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base leading-relaxed text-foreground/90">“{t.quote}”</CardTitle>
                      </CardHeader>
                      <CardContent className="mt-auto text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{t.name}</span>
                        {t.role ? <span>{" · "}{t.role}</span> : null}
                      </CardContent>
                    </>
                  )}
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl">
                <DialogTitle className="sr-only">Testimonial Image</DialogTitle>
                <div className="w-full">
                  {t.imageSrc ? (
                    <Image
                      src={t.imageSrc}
                      alt={t.name ? t.name : "Testimonial"}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain max-h-[80vh]"
                      priority={false}
                    />
                  ) : null}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
