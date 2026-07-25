"use client";

import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Handshake, HeartHandshake, Mail, Phone, Users, ExternalLink } from "lucide-react";
import Link from "next/link";

export function GetInvolvedTabs() {
    const searchParams = useSearchParams();
    const defaultTab = searchParams.get('tab') || 'donate';

    const bankDetails = [
        { label: "Account Name", value: "Ardas Samaj Kalyan Samiti" },
        { label: "Account Number", value: "921020022106218" },
        { label: "Bank", value: "AXIS BANK, CONVENT ROAD" },
        { label: "IFSC Code", value: "UTIB0003624" },
        { label: "Branch", value: "Dehradun, Uttarakhand" }
    ];

    return (
        <Tabs defaultValue={defaultTab} className="w-full">
            
          
            <TabsList className="grid w-full grid-cols-3 gap-2 bg-transparent h-auto p-0">
              <TabsTrigger 
                value="donate" 
                className="py-3 rounded-md border-2 border-[#111111] bg-[#111111] text-[hsl(20,85%,49%)] font-bold transition-all duration-300 hover:bg-[hsl(20,85%,49%)] hover:text-[#111111] data-[state=active]:bg-[hsl(20,85%,49%)] data-[state=active]:text-[#111111] data-[state=active]:shadow-md"
              >
                Donate
              </TabsTrigger>
              <TabsTrigger 
                value="volunteer" 
                className="py-3 rounded-md border-2 border-[#111111] bg-[#111111] text-[hsl(20,85%,49%)] font-bold transition-all duration-300 hover:bg-[hsl(20,85%,49%)] hover:text-[#111111] data-[state=active]:bg-[hsl(20,85%,49%)] data-[state=active]:text-[#111111] data-[state=active]:shadow-md"
              >
                Volunteer
              </TabsTrigger>
              <TabsTrigger 
                value="partner" 
                className="py-3 rounded-md border-2 border-[#111111] bg-[#111111] text-[hsl(20,85%,49%)] font-bold transition-all duration-300 hover:bg-[hsl(20,85%,49%)] hover:text-[#111111] data-[state=active]:bg-[hsl(20,85%,49%)] data-[state=active]:text-[#111111] data-[state=active]:shadow-md"
              >
                Partner
              </TabsTrigger>
            </TabsList>

            <TabsContent value="donate" className="mt-8">
              <Card>
                <CardHeader>
                
                  <CardTitle className="font-headline text-2xl font-extrabold text-[#222222] animate-divine-pulse flex items-center gap-3">
                    <HeartHandshake className="h-6 w-6 text-accent shrink-0" />
                    Support Our Cause with a Donation
                  </CardTitle>
                  <CardDescription>
                    Every contribution, no matter the size, helps us continue our work and expand our reach. Your donation directly funds our programs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-4">Bank Transfer Details:</h3>
                  <div className="space-y-3 text-muted-foreground p-6 border border-primary/10 rounded-xl bg-secondary/30 shadow-sm">
                  
                    {bankDetails.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col sm:flex-row transition-all duration-300 hover:text-[hsl(20,85%,49%)] hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.8)] cursor-pointer group pb-2 border-b border-primary/5 last:border-0 last:pb-0"
                      >
                        <span className="font-semibold w-full sm:w-1/3 transition-colors duration-300 group-hover:text-[hsl(20,85%,49%)]">
                          {item.label}:
                        </span>
                        <span className="w-full sm:w-2/3 transition-colors duration-300 group-hover:text-foreground">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                    After making a donation, please email us at <a href="mailto:asktrust.in@gmail.com" className="text-primary hover:underline font-medium transition-colors">asktrust.in@gmail.com</a> with the transaction details for your receipt. Donations are eligible for tax benefits under section 80G.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="volunteer" className="mt-8">
              <Card>
                <CardHeader>
                  
                  <CardTitle className="font-headline text-2xl font-extrabold text-[#222222] animate-divine-pulse flex items-center gap-3">
                    <Users className="h-6 w-6 text-accent shrink-0" />
                    Become a Volunteer
                  </CardTitle>
                  <CardDescription>
                    Ready to make a difference with your time and skills? Click the button below to fill out our volunteer registration form. We're excited to have you on board!
                  </CardDescription>
                </CardHeader>
                <CardContent>
           
                  <Button asChild className="w-full h-12 relative overflow-hidden font-bold border-2 border-[#111111] text-[hsl(20,85%,49%)] bg-[#111111] transition-colors duration-300 before:absolute before:inset-0 before:-translate-x-full before:bg-[hsl(20,85%,49%)] before:transition-transform before:duration-300 hover:text-[#111111] hover:before:translate-x-0 before:z-[-1] z-10 rounded-md">
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf9hh4zV2XGV2Y1L7l2O5MLucf6bWU-ZA_nabPN8mOHu0WVrg/viewform?usp=preview" target="_blank">
                      Register on Google Forms
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

             <TabsContent value="partner" className="mt-8">
               <Card>
                <CardHeader>
                 
                  <CardTitle className="font-headline text-2xl font-extrabold text-[#222222] animate-divine-pulse flex items-center gap-3">
                    <Handshake className="h-6 w-6 text-accent shrink-0" />
                    Partner With Us
                  </CardTitle>
                  <CardDescription>
                    We believe in the power of collaboration. Partner with us to create a larger, more sustainable impact in the community.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you are a corporation, a foundation, another NGO, or a government body, we are open to partnerships that align with our mission. We can collaborate on:
                  </p>
                  
        
                 
<ul className="space-y-3 p-4 border border-primary/10 rounded-xl bg-secondary/30">
  {[
    "Corporate Social Responsibility (CSR) projects",
    "Sponsoring specific programs or events",
    "Employee engagement and volunteering programs",
    "Joint advocacy and awareness campaigns"
  ].map((item, i) => (
    <li 
      key={i} 
      className="flex items-start gap-2 text-muted-foreground transition-all duration-300 hover:text-[hsl(20,85%,49%)] hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.8)] cursor-pointer group"
    >
      <span className="text-accent font-bold mt-0.5 transition-colors duration-300 group-hover:text-[hsl(20,85%,49%)]">•</span>
      <span className="transition-colors duration-300 group-hover:text-foreground">{item}</span>
    </li>
  ))}
</ul>

                  <p className="text-muted-foreground">
                    To discuss partnership opportunities, please reach out to us directly.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                   
                     <Button asChild className="w-full sm:w-auto h-12 relative overflow-hidden font-bold border-2 border-[hsl(20,85%,49%)] text-[#111111] bg-[hsl(20,85%,49%)] transition-colors duration-300 before:absolute before:inset-0 before:-translate-x-full before:bg-[#111111] before:transition-transform before:duration-300 hover:text-[hsl(20,85%,49%)] hover:before:translate-x-0 before:z-[-1] z-10 rounded-md">
                        <a href="mailto:asktrust.in@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email Us</a>
                     </Button>

                     
                     <Button asChild className="w-full sm:w-auto h-12 relative overflow-hidden font-bold border-2 border-[hsl(20,85%,49%)] text-[#111111] bg-[hsl(20,85%,49%)] transition-colors duration-300 before:absolute before:inset-0 before:-translate-x-full before:bg-[#111111] before:transition-transform before:duration-300 hover:text-[hsl(20,85%,49%)] hover:before:translate-x-0 before:z-[-1] z-10 rounded-md">
                        <a href="tel:+917017075603"><Phone className="mr-2 h-4 w-4" /> Call Us</a>
                     </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
        </Tabs>
    )
}