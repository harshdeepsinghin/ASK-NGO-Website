import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const patrons = [
    {
        name: "Archana Yadav Kapoor",
        role: "Director, Vedanta IAS Coaching Institutes",
        message: "I got associated with Ardas Samaj Kalyan trust during the pandemic and was really surprised to know about the livelihood generation initiative by the trust for the jail inmates. Since then I had actively participated in the different activities organised for the social upliftment of the weaker section of the society. I am glad to be part of Ardas samaj kalyan (ASK) trust and wish more power to us to serve the society.",
        imageUrl: "https://placehold.co/100x100.png"
    },
    {
        name: "Sindhu Gupta",
        role: "MD, Hotel Saffron Leaf",
        message: "I believe that the statement 'A right team at the right place, at the right time, can make wonders'. I am proud to be part of the team of Ardas samaj kalyan (ASK) trust and supporting in their 'Good for all' initiatives.",
        imageUrl: "https://placehold.co/100x100.png"
    }
];

const supportingAgencies = [
    { name: "Khadi And Village Industries Comission (KVIC)", logoUrl: "https://placehold.co/200x100.png" },
    { name: "Wildlife Institute Of India (WII)", logoUrl: "https://placehold.co/200x100.png" },
    { name: "Ajeevika Mission", logoUrl: "https://placehold.co/200x100.png" },
    { name: "District Industry Centre (Dehradun)", logoUrl: "https://placehold.co/200x100.png" },
    { name: "National Rural Livelihood Mission (NRLM)", logoUrl: "https://placehold.co/200x100.png" },
    { name: "ICICI FOUNDATION", logoUrl: "https://placehold.co/200x100.png" },
    { name: "National Institute for Entrepreneurship and Small Business Development.(NIESBUD)", logoUrl: "https://placehold.co/200x100.png" },
    { name: "Institute of Entrepreneurship Development (IED)", logoUrl: "https://placehold.co/200x100.png" },
    { name: "IL&FS-RPL Training", logoUrl: "https://placehold.co/200x100.png" },
    { name: "SBMA (NGO)", logoUrl: "https://placehold.co/200x100.png" },
    { name: "SEEMA (NGO)", logoUrl: "https://placehold.co/200x100.png" },
];

export default function PartnersPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <section className="bg-primary/10 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Patrons & Supporters</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
                        Our work is made possible through the generous support and collaboration of these esteemed organizations and individuals.
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-12">Messages from Our Patrons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {patrons.map((patron) => (
                            <Card key={patron.name} className="flex flex-col items-center text-center">
                                <CardHeader>
                                    <Avatar className="w-24 h-24 border-4 border-primary/50">
                                        <AvatarImage src={patron.imageUrl} alt={patron.name} data-ai-hint="portrait professional"/>
                                        <AvatarFallback>{patron.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="font-headline text-xl font-semibold">{patron.name}</h3>
                                    <p className="text-primary font-medium">{patron.role}</p>
                                    <p className="mt-4 text-muted-foreground italic">"{patron.message}"</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary/50">
                <div className="container mx-auto px-4">
                     <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-12">Our Supporting Agencies</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {supportingAgencies.map((partner, index) => (
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
                                    <p className="text-center font-semibold mt-4 text-sm">{partner.name}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
