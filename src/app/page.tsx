import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, Handshake, HeartHandshake, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/home1.png"
          alt="Community members working together"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          data-ai-hint="community help"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="z-20 p-4 max-w-4xl">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !text-white drop-shadow-lg">
            Empowering Communities, Transforming Lives
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto !text-white/90 drop-shadow-md">
            Ardas Samaj Kalyan is dedicated to fostering social upliftment through education, skill development, and community support.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/get-involved#donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-involved#volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold">Our Mission</h2>
          <div className="flex justify-center">
            <div className="mt-4 h-1 w-24 bg-primary rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            To create a self-reliant society by empowering individuals from marginalized communities. We focus on providing essential skills, education, and support systems that enable sustainable growth and a brighter future for all.
          </p>
        </div>
      </section>

      <section id="programs" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center">Our Core Programs</h2>
          <p className="text-center mt-2 text-muted-foreground">Driving change where it matters most.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <BookOpenText className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline mt-4">Skills for Prisoners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Providing technical and soft skills to inmates for rehabilitation and successful reintegration into society.</p>
              </CardContent>
            </Card>
            <Card className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline mt-4">Women's SHG Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Empowering women's Self-Help Groups with training and resources to foster financial independence.</p>
              </CardContent>
            </Card>
            <Card className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline mt-4">Youth Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Supporting and guiding the youth towards positive pathways through mentorship and skill-building programs.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/programs">Learn More About Our Programs &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="get-involved" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold">Join Us in Making a Difference</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Your support can change lives. Whether you donate, volunteer, or partner with us, you become a vital part of our mission.
          </p>
          <div className="mt-8 flex justify-center items-center gap-8">
             <div className="text-center">
                <HeartHandshake className="h-12 w-12 text-primary mx-auto"/>
                <h3 className="text-xl font-semibold mt-2">Donate</h3>
                <p className="text-muted-foreground mt-1">Your contribution helps us fund our programs.</p>
             </div>
             <div className="text-center">
                <Handshake className="h-12 w-12 text-primary mx-auto"/>
                <h3 className="text-xl font-semibold mt-2">Partner</h3>
                <p className="text-muted-foreground mt-1">Collaborate with us to expand our reach.</p>
             </div>
          </div>
           <div className="mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                 <Link href="/get-involved">Get Involved Today</Link>
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
