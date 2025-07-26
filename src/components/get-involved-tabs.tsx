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

    return (
        <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="donate">Donate</TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="partner">Partner</TabsTrigger>
            </TabsList>
            <TabsContent value="donate" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <HeartHandshake className="h-6 w-6 text-primary" />
                    Support Our Cause with a Donation
                  </CardTitle>
                  <CardDescription>
                    Every contribution, no matter the size, helps us continue our work and expand our reach. Your donation directly funds our programs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2">Bank Transfer Details:</h3>
                  <div className="space-y-1 text-muted-foreground p-4 border rounded-md bg-secondary/30">
                    <p><strong>Account Name:</strong> Ardas Samaj Kalyan Samiti</p>
                    <p><strong>Account Number:</strong> 50100476489371</p>
                    <p><strong>Bank:</strong> HDFC BANK LTD</p>
                    <p><strong>IFSC Code:</strong> HDFC0001303</p>
                    <p><strong>Branch:</strong> Dehradun, Uttarakhand</p>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    After making a donation, please email us at <a href="mailto:asktrust.in@gmail.com" className="text-primary hover:underline">asktrust.in@gmail.com</a> with the transaction details for your receipt. Donations are eligible for tax benefits under section 80G.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="volunteer" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Become a Volunteer
                  </CardTitle>
                  <CardDescription>
                    Ready to make a difference with your time and skills? Click the button below to fill out our volunteer registration form. We're excited to have you on board!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
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
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Handshake className="h-6 w-6 text-primary" />
                    Partner With Us
                  </CardTitle>
                  <CardDescription>
                    We believe in the power of collaboration. Partner with us to create a larger, more sustainable impact in the community.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Whether you are a corporation, a foundation, another NGO, or a government body, we are open to partnerships that align with our mission. We can collaborate on:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Corporate Social Responsibility (CSR) projects</li>
                      <li>Sponsoring specific programs or events</li>
                      <li>Employee engagement and volunteering programs</li>
                      <li>Joint advocacy and awareness campaigns</li>
                  </ul>
                  <p className="text-muted-foreground pt-4">
                    To discuss partnership opportunities, please reach out to us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Button asChild className="w-full sm:w-auto">
                        <a href="mailto:asktrust.in@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email Us</a>
                     </Button>
                     <Button asChild variant="secondary" className="w-full sm:w-auto">
                        <a href="tel:+917017075603"><Phone className="mr-2 h-4 w-4" /> Call Us</a>
                     </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
        </Tabs>
    )
}
