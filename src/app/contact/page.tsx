import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const address = "33/4/1 Patel Nagar, Saharanpur Road, Dehradun, Uttarakhand";
    const email = "asktrust.in@gmail.com";
    const phone = "+91 7017075603";
    const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3072.106644174089!2d78.02417057539367!3d30.31263764171911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE4JzQ1LjgiTiA3OMKwMDEnMjguNSJF!5e1!3m2!1sen!2sin!4v1752749096046!5m2!1sen!2sin`;

    return (
        <> 
      <section className="bg-[hsl(20,85%,65%)] py-12">
        <div className="container mx-auto px-4 text-center">
          
          <h1 className="font-headline text-4xl md:text-5xl font-bold opacity-0 animate-slide-up">
           Contact Us
          </h1>
          
          <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground opacity-0 animate-reveal  [animation-delay:420ms]">
             We'd love to hear from you. Whether you have a question, a suggestion, or want to partner with us, get in touch.
          </p>
          
        </div>
      </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card>
                            <CardHeader>
                               
                                <CardTitle className="font-headline text-2xl font-extrabold text-[#222222] animate-divine-pulse">
                                    Our Contact Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Address</h3>
                                      
                                        <p className="text-muted-foreground transition-all duration-300 hover:text-[hsl(20,85%,49%)] hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.8)] cursor-pointer">
                                            {address}
                                        </p>
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
                             
                                <CardTitle className="font-headline text-2xl font-extrabold text-[#222222] animate-divine-pulse">
                                    Find Us on the Map
                                </CardTitle>
                            </CardHeader>
                             <CardContent className="flex-grow flex flex-col p-0">
                               <div className="w-full flex-grow rounded-b-md overflow-hidden">
                                <iframe
                                    src={googleMapsEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '350px' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                               </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}