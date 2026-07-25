"use client"; // Required for useEffect and useState hooks

import { useEffect, useState } from "react"; // 🌟 ADDED: React hooks
import Image from "next/image"; // 🌟 ADDED: Required for the highly optimized marquee images
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Group, HandHeart, Users } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";


// If you need this SEO data, move this exact block into a `layout.tsx` file in this same directory.
/*
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Programs | Ardas Samaj Kalyan NGO",
  description: "Explore core programs: prisoner rehabilitation, women's SHG empowerment, youth development, technical trainings, community initiatives, and capacity building.",
  openGraph: {
    title: "Programs | Ardas Samaj Kalyan NGO",
    description: "Skill development, empowerment, and community upliftment initiatives.",
    url: "https://asktrust.in/programs",
    siteName: "ASK Trust",
    images: [
      { url: "/images/home1.png", width: 1200, height: 630, alt: "Programs Overview" }
    ],
    type: "website"
  }
};
*/

const programs = [
  {
    id: "core-prisoners",
    title: "Skills for Prisoners: A Path to Rehabilitation",
    description: "Our rehabilitation program aims to equip inmates with valuable skills, fostering a sense of purpose and preparing them for successful reintegration into society upon release.",
    technicalSkills: ["Basic computer literacy", "Handicrafts and tailoring", "Vocational training (e.g., plumbing, electrical work)", "Gardening and agriculture"],
    softSkills: ["Conflict resolution", "Communication and interpersonal skills", "Stress and anger management", "Financial literacy"],
    benefits: ["Reduced recidivism rates", "Improved employment prospects post-release", "Enhanced self-esteem and mental well-being", "Positive contribution to family and community"],
  },
  {
    id: "core-shg",
    title: "Empowering Women's Self-Help Groups (SHG)",
    description: "We work with women's SHGs to build their capacity, promote entrepreneurship, and create sustainable livelihoods, leading to financial independence and social empowerment.",
    technicalSkills: ["Product development and quality control", "Packaging and marketing", "Bookkeeping and financial management", "Digital tools for business"],
    softSkills: ["Leadership and decision-making", "Negotiation and bargaining skills", "Group dynamics and collaboration", "Building market linkages"],
    benefits: ["Increased household income and financial stability", "Greater participation in community decisions", "Enhanced social status and self-confidence", "Creation of a strong support network for women"],
  },
  {
    id: "core-youth",
    title: "Support and Guidance for At-Risk Youth",
    description: "This program is designed to steer youth away from negative influences by providing them with positive engagement, mentorship, and opportunities for personal and professional growth.",
    technicalSkills: ["Career counseling and goal setting", "Digital literacy and social media ethics", "Job readiness training (resume writing, interviews)", "Introduction to vocational trades"],
    softSkills: ["Personal development and life skills", "Building resilience and coping mechanisms", "Teamwork and leadership", "Responsible citizenship and community service"],
    benefits: ["Reduced engagement in anti-social behaviors", "Improved academic and career trajectories", "Stronger sense of purpose and direction", "Development of positive peer and mentor relationships"],
  },
];

const trainingAreas = {
    technical: [
        "LED Light Making", "Mobile Charger Making", "Powerbank Making",
        "Solar Lantern Making", "Solar Street light Making", "Diwali Lights Making"
    ],
    softSkills: [
        "EDP Training", "Self Branding", "Right Use Of Social Media", "Digital Marketing"
    ],
    others: [
        "Jewellery Making", "Agarbati Making", "Jute Bag Making",
        "Home Decor Products", "Candle Making", "Cow Dung Products", "Herbal Soap Making"
    ]
};

const beneficiaries = [
    "Inmates of Haldwani, Dehradun, Haridwar, and Bareilly Jails",
    "Inmates of Bal Sudhar Greh, Haridwar",
    "Inmates of Nari Niketan, Dehradun",
    "Inmates of Bal Sampreshan Greh, Dehradun",
    "Students of Rajkiye Purv Madhamik Vidhalaya, Dehradun",
    "Women Self-Help Groups in various villages (Mithiberi, Teliwala, Rampur danda, etc.)",
    "Provided RPL trainings with THSC",
    "Digital marketing training for SHG at Sitarganj Udham Singh Nagar",
    "Online AI workshop for Self Help Groups ( AI for Enterprenureship and Digital Growth) "
];

const initiativePrograms = [
  { id: 'covid-food', title: 'COVID Relief: Food Distribution', summary: 'Distributed essential food packets to vulnerable families during the pandemic lockdowns ensuring food security.' },
  { id: 'tree-plantation', title: 'Tree Plantation Drive', summary: 'Organized community-led plantation drives promoting environmental sustainability and awareness.' },
  { id: 'cyber-security', title: 'Cyber Security Awareness', summary: 'Workshops educating youth and community members on safe digital practices and online fraud prevention.' },
  { id: 'traffic-awareness', title: 'Traffic Awareness Campaign', summary: 'Sessions and street activities to promote road safety, responsible driving, and pedestrian awareness.' },
  { id: 'summer-camp', title: 'Summer Camp (Children)', summary: 'Holistic development camp including creativity, basic computing, life skills, and recreational activities.' },
  { id: 'smartphone-photography', title: 'Smartphone Photography Workshop', summary: 'Training participants to capture impactful images using mobile devices—framing, light, storytelling.' },
  { id: 'artisan-camp', title: 'Artisan Skill Camp', summary: 'Hands-on exposure to local crafts supporting creativity, self-reliance, and cultural preservation.' },
  { id: 'multispeciality-camp', title: 'बहुदेशीय शिविर (Multi-speciality Camp)', summary: 'Integrated camp offering health check-ups, counseling, and access to social welfare resources.' },
  { id: 'drugs-cyber-awareness', title: 'Drugs and Cyber Awareness Campaign', summary: 'A joint awareness campaign to spread the message of saying yes to cyber awareness and no to drug use.' },

];

//  Image arrays for the 3-Tier Marquee.
const row1 = [
  { src: `${basePath}/images/programs-gallery/ASKGALa1.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa2.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa3.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa4.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa5.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa6.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa7.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa8.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa9.jpeg` },
{ src: `${basePath}/images/programs-gallery/ASKGALa10.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa11.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa12.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa13.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa14.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa15.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa16.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa17.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa18.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALa19.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa20.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa21.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa22.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa23.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa24.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa25.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa26.jpeg` },
 { src: `${basePath}/images/programs-gallery/ASKGALa27.jpeg` },
];

const row2 = [
  { src: `${basePath}/images/programs-gallery/ASKGALb1.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb2.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb3.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb4.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb5.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb6.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb7.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb8.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb9.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb10.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb11.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb12.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb13.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb14.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb15.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb16.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb17.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb18.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb19.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb20.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALb21.jpeg` },
];

const row3 = [
  { src: `${basePath}/images/programs-gallery/ASKGALc1.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc2.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc3.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc4.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc5.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc6.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc7.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc8.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc9.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc10.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc11.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc12.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc13.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc14.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc15.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc16.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc17.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc18.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc19.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc20.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc21.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc22.jpeg` },
  { src: `${basePath}/images/programs-gallery/ASKGALc23.jpeg` },
 
];

export default function ProgramsPage() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);
 const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash) {
      const cleanId = hash.replace("#", ""); 
      
      setOpenItem(cleanId);
      
      setTimeout(() => {
        const targetElement = document.getElementById(cleanId);
        
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - 80;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 300);
    }
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1050);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <>
      <section className="bg-[hsl(20,85%,65%)] py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold opacity-0 animate-slide-up">
            Our Programs
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground opacity-0 animate-reveal [animation-delay:420ms]">
            We believe in creating targeted, impactful programs that address the specific needs of the communities we serve.
          </p>
        </div>
      </section>

      {/* 3-Tier Multi-Directional Marquee Gallery */}
      <section className={`flex flex-col gap-4 overflow-hidden py-10 bg-secondary/30 border-y border-primary/10 transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* ROW 1: Moves Left */}
        <div className="flex relative w-full overflow-hidden">
          <div className="flex animate-marquee-row1 whitespace-nowrap gap-4">
            {row1.concat(row1).map((img, i) => (
              <div key={`row1-${i}`} className="w-[210px] h-[140px] md:w-[282px] md:h-[188px] relative flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                <Image src={img.src} alt="NGO Program Event" fill className="object-cover" sizes="(max-width: 768px) 256px, 320px" />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Right */}
        <div className="flex relative w-full overflow-hidden">
          <div className="flex animate-marquee-row2 whitespace-nowrap gap-4">
            {row2.concat(row2).map((img, i) => (
              <div key={`row2-${i}`} className="w-[210px] h-[140px] md:w-[282px] md:h-[188px] relative flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                <Image src={img.src} alt="NGO Program Event" fill className="object-cover" sizes="(max-width: 768px) 256px, 320px" />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3: Moves Left */}
        <div className="flex relative w-full overflow-hidden">
          <div className="flex animate-marquee-row3 whitespace-nowrap gap-4">
            {row3.concat(row3).map((img, i) => (
              <div key={`row3-${i}`} className="w-[210px] h-[140px] md:w-[282px] md:h-[188px] relative flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                <Image src={img.src} alt="NGO Program Event" fill className="object-cover" sizes="(max-width: 768px) 256px, 320px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-headline text-4xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Core Program Areas</h2>
          
          <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            value={openItem}
            onValueChange={setOpenItem}
          >
            {programs.map((program) => (
              <AccordionItem 
                key={program.id} 
                id={program.id}
                value={program.id}
                className="mb-4 px-6 border border-primary/10 rounded-xl bg-background transition-all duration-300 ease-in-out hover:shadow-md hover:bg-gradient-to-br hover:from-background hover:to-[rgba(249,138,20,0.15)] target:shadow-lg target:bg-gradient-to-br target:from-background target:to-[rgba(249,138,20,0.20)] target:border-primary/50"
              >
                <AccordionTrigger className="text-left font-headline text-xl hover:no-underline">
                  {program.title}
                </AccordionTrigger>
                <AccordionContent className="pt-2">
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Technical Skills</h3>
                      <ul className="space-y-2">
                        {program.technicalSkills.map((skill, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Soft Skills</h3>
                      <ul className="space-y-2">
                        {program.softSkills.map((skill, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                             <span className="text-muted-foreground">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                   <div className="mt-8">
                      <h3 className="font-semibold text-lg mb-3">Expected Benefits</h3>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-headline text-4xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Our Skill Development Trainings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                    <CardHeader>
                        <CardTitle>Technical Trainings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {trainingAreas.technical.map(skill => (
                                <li 
                                  key={skill} 
                                  className="flex items-start gap-2 transition-all duration-300 hover:text-[hsl(20,85%,49%)] hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.8)] cursor-pointer group"
                                >
                                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0 transition-colors duration-300 group-hover:text-[hsl(20,85%,49%)]" />
                                  <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                                    {skill}
                                  </span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Soft Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {trainingAreas.softSkills.map(skill => (
                                <li 
                                  key={skill} 
                                  className="flex items-start gap-2 transition-all duration-300 hover:text-[hsl(20,85%,49%)] hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.8)] cursor-pointer group"
                                >
                                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0 transition-colors duration-300 group-hover:text-[hsl(20,85%,49%)]" />
                                  <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                                    {skill}
                                  </span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Other Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {trainingAreas.others.map(skill => (
                                <li 
                                  key={skill} 
                                  className="flex items-start gap-2 transition-all duration-300 hover:text-[hsl(20,85%,49%)] hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.8)] cursor-pointer group"
                                >
                                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0 transition-colors duration-300 group-hover:text-[hsl(20,85%,49%)]" />
                                  <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                                    {skill}
                                  </span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-headline text-4xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Our Beneficiaries</h2>
           <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-3 columns-1 md:columns-2">
                        {beneficiaries.map((beneficiary, i) => (
                          <li 
                            key={i} 
                            className="flex items-start gap-3 transition-all duration-300 hover:text-[hsl(20,85%,49%)] hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.8)] cursor-pointer group"
                          >
                            <Users className="h-5 w-5 text-primary mt-0.5 shrink-0 transition-colors duration-300 group-hover:text-[hsl(20,85%,49%)]" />
                            <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                              {beneficiary}
                            </span>
                          </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
       </section>

      <section id="community-initiatives" className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-headline text-4xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Community & Special Initiatives</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Alongside our core programs we regularly conduct targeted initiatives responding to emerging needs, seasonal opportunities, and holistic community upliftment.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {initiativePrograms.map(p => (
              <Card 
                key={p.id} 
                id={p.id} 
                className="h-full flex flex-col scroll-mt-32 bg-background border-primary/20 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:bg-gradient-to-br hover:from-background hover:to-[rgba(249,138,20,0.20)] cursor-pointer target:scale-[1.03] target:shadow-lg target:bg-gradient-to-br target:from-background target:to-[rgba(249,138,20,0.20)] target:border-primary/50"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="font-headline text-xl leading-snug">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm leading-relaxed">
                  {p.summary}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}