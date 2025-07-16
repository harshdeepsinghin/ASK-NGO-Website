import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const address = "33/4/1 Patel Nagar, Saharanpur Road, Dehradun, Uttarakhand";
    const email = "asktrust.in@gmail.com";
    const phone = "+91 7017075603";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <div className="animate-in fade-in duration-500">
            <section className="bg-primary/10 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Contact Us</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
                        We'd love to hear from you. Whether you have a question, a suggestion, or want to partner with us, get in touch.
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline">Our Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Address</h3>
                                        <p className="text-muted-foreground">{address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors">{email}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">{phone}</a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline">Find Us on the Map</CardTitle>
                            </CardHeader>
                             <CardContent className="flex-grow flex flex-col">
                               <a 
                                 href={googleMapsUrl} 
                                 target="_blank" 
                                 rel="noopener noreferrer" 
                                 className="w-full flex-grow bg-cover bg-center rounded-md flex items-center justify-center group" 
                                 style={{backgroundImage: 'url(/map-placeholder.png)', minHeight: '300px'}}
                                >
                                 <div className="w-full h-full bg-black/30 group-hover:bg-black/50 transition-colors rounded-md flex items-center justify-center p-4">
                                   <Button variant="secondary">
                                     Open in Google Maps
                                   </Button>
                                 </div>
                               </a>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
