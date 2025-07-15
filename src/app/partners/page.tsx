import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const partners = [
    { name: "Partner Organization 1", logoUrl: "https://placehold.co/200x100.png" },
    { name: "Supporter Company 2", logoUrl: "https://placehold.co/200x100.png" },
    { name: "Community Foundation 3", logoUrl: "https://placehold.co/200x100.png" },
    { name: "Government Department 4", logoUrl: "https://placehold.co/200x100.png" },
    { name: "Corporate Sponsor 5", logoUrl: "https://placehold.co/200x100.png" },
    { name: "Fellow NGO 6", logoUrl: "https://placehold.co/200x100.png" },
    { name: "Local Business 7", logoUrl: "https://placehold.co/200x100.png" },
    { name: "Philanthropic Group 8", logoUrl: "https://placehold.co/200x100.png" },
];

export default function PartnersPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Partners & Supporters</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
                        Our work is made possible through the generous support and collaboration of these esteemed organizations. Together, we are stronger.
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {partners.map((partner, index) => (
                            <Card key={index} className="group transition-shadow duration-300 hover:shadow-lg">
                                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                                    <div className="relative w-full h-24">
                                        <Image 
                                            src={partner.logoUrl} 
                                            alt={partner.name}
                                            layout="fill"
                                            objectFit="contain"
                                            className="transition-transform duration-300 group-hover:scale-105"
                                            data-ai-hint="logo"
                                        />
                                    </div>
                                    <p className="text-center font-semibold mt-4">{partner.name}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
