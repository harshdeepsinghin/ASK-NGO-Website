import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const address = "33/4/1 Patel Nagar, Saharanpur Road, Dehradun, Uttarakhand";
    const email = "asktrust.in@gmail.com";
    const phone = "+91 7017075603";
    const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.062569278917!2d77.9943440755653!3d30.32081197478583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b230485c27d%3A0x89e73c381d4a464e!2sPatel%20Nagar%2C%20Dehradun%2C%20Uttarakhand%20248001%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`;


    return (
        <div className="animate-in fade-in duration-500">
            <section className="bg-primary/10 py-8 md:py-12">
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
                             <CardContent className="flex-grow flex flex-col p-0">
                               <div className="w-full flex-grow rounded-b-md overflow-hidden">
                                <iframe
                                    src={googleMapsEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '350px' }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                               </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
