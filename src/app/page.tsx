import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, Handshake, HeartHandshake, Users, Instagram, Linkedin } from "lucide-react";
import type { Metadata } from "next";

//Create dynamic variables so the code adapts to where it is hosted
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://asktrust.in";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

//  The upgraded metadata object
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ardas Samaj Kalyan NGO | Empowering Communities",
  description: "Official website of Ardas Samaj Kalyan NGO: skill development, prisoner rehabilitation, women's SHG empowerment, youth development, community initiatives.",
  keywords: [
    "NGO", "Ardas Samaj Kalyan", "community development", "women empowerment", "skill development", "youth programs", "rehabilitation", "Uttarakhand NGO"
  ],
  openGraph: {
    title: "Ardas Samaj Kalyan NGO",
    description: "Empowering communities through education, skills, and social upliftment.",
    url: `${siteUrl}${basePath}`,
    siteName: "ASK Trust",
    images: [
      { 
        //  Dynamically builds the absolute URL for link sharing previews
        url: `${siteUrl}${basePath}/images/home1.png`, 
        width: 1200, 
        height: 630, 
        alt: "Ardas Samaj Kalyan Hero" 
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardas Samaj Kalyan NGO",
    description: "Empowering communities through education, skills, and social upliftment.",
    images: [`${siteUrl}${basePath}/images/home1.png`],
  },
};
import Image from "next/image";
import { WallOfFame } from "@/components/common/wall-of-fame";
import Link from "next/link";

export default function Home() {

  return (
    <>
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/home1.png"
          alt="Community members working together"
          fill
          priority
          className="absolute z-0 object-cover"
          data-ai-hint="community help"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="z-20 p-4 max-w-4xl">
          
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !text-[hsl(20,85%,49%)] drop-shadow-lg opacity-0 animate-pop">
            Empowering Communities, Transforming Lives
          </h1>
          
          
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto !text-white/90 drop-shadow-md opacity-0 animate-reveal [animation-delay:580ms]">
            Ardas Samaj Kalyan is dedicated to fostering social upliftment through education, skill development, and community support.
          </p>
          
        
          <div className="mt-8 flex justify-center gap-4">
 
  <Button 
    asChild 
    size="lg" 
    className="opacity-0 animate-spring-up [animation-delay:400ms]! transition-all duration-400 font-bold border-2 border-[hsl(20,85%,49%)] bg-[hsl(20,85%,49%)] text-[#111111] hover:bg-[#111111] hover:text-[hsl(20,85%,49%)] hover:border-[#111111] hover:scale-105 hover:shadow-xl"
  >
    <Link href="/get-involved?tab=donate">Donate Now</Link>
  </Button>

 
  <Button 
    asChild 
    size="lg" 
    className="opacity-0 animate-spring-up [animation-delay:550ms]! transition-all duration-400 font-bold border-2 border-[#111111] bg-[#111111] text-[hsl(20,85%,49%)] hover:bg-[hsl(20,85%,49%)] hover:text-[#111111] hover:border-[hsl(20,85%,49%)] hover:scale-105 hover:shadow-xl"
  >
    <Link href="/get-involved?tab=volunteer">Be a Volunteer</Link>
  </Button>
</div>
          
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Our Mission</h2>
          <div className="flex justify-center">
            <div className="mt-4 h-1 w-24 bg-primary rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            To create a self-reliant society by empowering individuals from marginalized communities. We focus on providing essential skills, education, and support systems that enable sustainable growth and a brighter future for all.
          </p>
        </div>
      </section>

      <section id="impact" className="py-12 md:py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-4xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Our Impact</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 text-sm md:text-base">
            Tangible outcomes created with community partners, volunteers, and beneficiaries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-1">
            {[
               { label: 'Awareness Camps', value: '50+' },
               { label: 'Inmates Trained', value: '1000+' },
               { label: 'Lives Impacted', value: '50000+' },
               { label: 'Volunteers Engaged', value: '500+' },
              { label: 'Trees Planted', value: '2500+' },
               { label: 'Meals Distributed', value: '10000+' },
               { label: 'Free Health Camp Beneficiaries', value: '500+' },
              { label: 'Youth Mentored', value: '1000+' },
             { label: 'Women Trained', value: '1500+' },
            ].map(stat => (
              <div key={stat.label} className="text-center group">
                <div className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight group-hover:scale-105 transition-transform">{stat.value}</div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-wide text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-[11px] md:text-xs text-muted-foreground/70 text-center mt-8">* Figures are cumulative estimates across initiatives and core programs.</p>
        </div>
      </section>

      <section id="programs" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-4xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Our Core Programs</h2>
          <p className="text-center mt-2 text-muted-foreground">Driving change where it matters most.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
 <Link href="/programs#core-prisoners" className="block h-full">
  <Card className="h-full text-center bg-background transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:bg-gradient-to-br hover:from-background hover:to-[rgba(249,138,20,0.20)] cursor-pointer">
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
</Link>

<Link href="/programs#core-shg" className="block h-full">
  <Card className="h-full text-center bg-background transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:bg-gradient-to-br hover:from-background hover:to-[rgba(249,138,20,0.20)] cursor-pointer">
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
</Link>

<Link href="/programs#core-youth" className="block h-full">
  <Card className="h-full text-center bg-background transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:bg-gradient-to-br hover:from-background hover:to-[rgba(249,138,20,0.20)] cursor-pointer">
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
</Link>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/programs">Learn More About Our Programs &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      <WallOfFame />

      <section id="initiatives" className="py-12 bg-primary/5 border-y border-primary/10">
  <div className="container mx-auto px-4">
    <h2 className="font-headline text-4xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Community Initiatives</h2>
    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 text-sm md:text-base">
      From COVID food relief to tree plantation and cyber safety, we respond to real community needs with focused action.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
  {[
 
    { id: 'covid-food', title: 'COVID Relief: Food Distribution' },
    { id: 'tree-plantation', title: 'Tree Plantation Drive' },
    { id: 'cyber-security', title: 'Cyber Security Awareness' },
    { id: 'traffic-awareness', title: 'Traffic Awareness Campaign' },
    { id: 'summer-camp', title: 'Summer Camp (Children)' },
    { id: 'smartphone-photography', title: 'Smartphone Photography Workshop' },
    { id: 'artisan-camp', title: 'Artisan Skill Camp' },
    { id: 'multispeciality-camp', title: 'बहुदेशीय शिविर (Multi-speciality Camp)' },
    { id: 'drugs-cyber-awareness', title: 'Drugs and Cyber Awareness Campaign' }
  ].map(init => (
    <Link 
      key={init.id} 
      href={`/programs#${init.id}`}
      className="bg-card border border-border/50 px-4 py-1.5 rounded-full text-xs md:text-sm text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground hover:border-primary/40 hover:scale-[1.05] hover:shadow-md hover:bg-gradient-to-br hover:from-card hover:to-[rgba(249,138,20,0.20)] cursor-pointer"
    >
      {init.title}
    </Link>
  ))}
</div>
    <div className="text-center mt-8">
      <Button asChild variant="ghost" size="sm" className="text-primary">
        <Link href="/programs">Explore All Programs →</Link>
      </Button>
    </div>
  </div>
</section>

<section id="get-involved" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          
          {/* DESKTOP/LAPTOP LEFT: Floating Instagram Button (Scales dynamically on smaller laptops) */}
          <a 
            href="https://www.instagram.com/asktrust/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex flex-col items-center justify-center absolute left-0 lg:left-2 xl:left-6 top-1/2 -translate-y-1/2 group z-20 gap-2 p-2 xl:p-4"
          >
            {/* The Floating Tooltip (Hover only) */}
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs xl:text-sm font-bold bg-slate-900 text-white px-3 py-1.5 rounded-md shadow-lg opacity-0 transition-all duration-900 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-2">
              Click to Follow!
            </span>
            
            {/* The Icon Wrapper (Paddings & sizes scale with screen width) */}
            <div className="p-2.5 lg:p-4 xl:p-5 rounded-full bg-background border-2 shadow-lg group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#e6683c] group-hover:to-[#bc1888] group-hover:text-white group-hover:border-transparent transition-all duration-900 hover:scale-110">
              
              {/* Icon shrinks smoothly: 64px on mid-laptops -> 80px on standard -> 112px on desktop -> 160px on wide screens */}
              <Instagram className="w-16 h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 2xl:w-40 2xl:h-40 transition-colors" />
            </div>

            {/* Permanent text below the icon */}
            <span className="text-xs xl:text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
              Instagram
            </span>
          </a>

          {/* DESKTOP/LAPTOP RIGHT: Floating LinkedIn Button (Scales dynamically on smaller laptops) */}
          <a 
            href="https://www.linkedin.com/company/ardas-samaj-kalyan-trust/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex flex-col items-center justify-center absolute right-0 lg:right-2 xl:right-6 top-1/2 -translate-y-1/2 group z-20 gap-2 p-2 xl:p-4"
          >
            {/* The Floating Tooltip (Hover only) */}
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs xl:text-sm font-bold bg-slate-900 text-white px-3 py-1.5 rounded-md shadow-lg opacity-0 transition-all duration-900 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-2">
              Let's Connect!
            </span>
            
            {/* The Icon Wrapper */}
            <div className="p-2.5 lg:p-4 xl:p-5 rounded-full bg-background border-2 shadow-lg group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-transparent transition-all duration-900 hover:scale-110">
              
              <Linkedin className="w-16 h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 2xl:w-40 2xl:h-40 transition-colors" />
            </div>

            {/* Permanent text below the icon */}
            <span className="text-xs xl:text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
              LinkedIn
            </span>
          </a>

        
          <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Join Us in Making a Difference</h2>
          <p className="mt-4 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto text-base lg:text-lg text-muted-foreground">
            Your support can change lives. Whether you donate, volunteer, or partner with us, you become a vital part of our mission.
            
            <span className="block mt-3 text-lg lg:text-xl font-semibold text-[hsl(20,85%,40%)]">
              Stay updated on our journey! Follow our social media handles by clicking the icons <span className="hidden md:inline">on the sides</span><span className="inline md:hidden">below</span>.
            </span>
          </p>
          <div className="mt-8 flex justify-center items-center gap-8">
             <div className="text-center">
                <HeartHandshake className="h-10 w-10 lg:h-12 lg:w-12 text-primary mx-auto"/>
                <h3 className="text-lg lg:text-xl font-semibold mt-2">Donate</h3>
                <p className="text-muted-foreground text-sm lg:text-base mt-1">Your contribution helps us fund our programs.</p>
             </div>
             <div className="text-center">
                <Handshake className="h-10 w-10 lg:h-12 lg:w-12 text-primary mx-auto"/>
                <h3 className="text-lg lg:text-xl font-semibold mt-2">Partner</h3>
                <p className="text-muted-foreground text-sm lg:text-base mt-1">Collaborate with us to expand our reach.</p>
             </div>
          </div>
          <div className="mt-10 relative z-30">
             <Button 
                asChild
                size="lg"
                className="relative overflow-hidden font-bold border-2 border-[#111111] text-[hsl(20,85%,49%)] bg-[#111111] transition-colors duration-300 before:absolute before:inset-0 before:-translate-x-full before:bg-[hsl(20,85%,49%)] before:transition-transform before:duration-300 hover:text-[#111111] hover:before:translate-x-0 before:z-[-1] z-10"
              >
                <Link href="/get-involved">Join Us Today</Link>
             </Button>
           </div>

           
           {/* MOBILE FALLBACK: Only shows on mobile devices (< 768px) */}
           <div className="flex md:hidden justify-center items-center gap-8 mt-16 pt-8 border-t border-border/50 relative z-30">
              <a href="https://www.instagram.com/asktrust/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                <div className="p-4 rounded-full bg-background border-2 shadow-md group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#e6683c] group-hover:to-[#bc1888] group-hover:text-white transition-all duration-900 active:scale-95">
                  <Instagram className="w-12 h-12 transition-colors" />
                </div>
                <span className="text-sm font-bold text-muted-foreground">Instagram</span>
              </a>

              <a href="https://www.linkedin.com/company/ardas-samaj-kalyan-trust/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                <div className="p-4 rounded-full bg-background border-2 shadow-md group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-900 active:scale-95">
                  <Linkedin className="w-12 h-12 transition-colors" />
                </div>
                <span className="text-sm font-bold text-muted-foreground">LinkedIn</span>
              </a>
           </div>

        </div> 
      </section>
   
    </>
  );
}