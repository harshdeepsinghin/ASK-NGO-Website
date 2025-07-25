import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Group, HandHeart, Users } from "lucide-react";

const programs = [
  {
    id: "prisoners",
    title: "Skills for Prisoners: A Path to Rehabilitation",
    description: "Our rehabilitation program aims to equip inmates with valuable skills, fostering a sense of purpose and preparing them for successful reintegration into society upon release.",
    technicalSkills: ["Basic computer literacy", "Handicrafts and tailoring", "Vocational training (e.g., plumbing, electrical work)", "Gardening and agriculture"],
    softSkills: ["Conflict resolution", "Communication and interpersonal skills", "Stress and anger management", "Financial literacy"],
    benefits: ["Reduced recidivism rates", "Improved employment prospects post-release", "Enhanced self-esteem and mental well-being", "Positive contribution to family and community"],
  },
  {
    id: "shg",
    title: "Empowering Women's Self-Help Groups (SHG)",
    description: "We work with women's SHGs to build their capacity, promote entrepreneurship, and create sustainable livelihoods, leading to financial independence and social empowerment.",
    technicalSkills: ["Product development and quality control", "Packaging and marketing", "Bookkeeping and financial management", "Digital tools for business"],
    softSkills: ["Leadership and decision-making", "Negotiation and bargaining skills", "Group dynamics and collaboration", "Building market linkages"],
    benefits: ["Increased household income and financial stability", "Greater participation in community decisions", "Enhanced social status and self-confidence", "Creation of a strong support network for women"],
  },
  {
    id: "youth",
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
    "Provided RPL trainings with THSC"
];

export default function ProgramsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Programs</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            We believe in creating targeted, impactful programs that address the specific needs of the communities we serve.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-headline text-3xl font-semibold text-center mb-8">Core Program Areas</h2>
          <Accordion type="single" collapsible className="w-full">
            {programs.map((program) => (
              <AccordionItem key={program.id} value={program.id}>
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
            <h2 className="font-headline text-3xl font-semibold text-center mb-8">Our Skill Development Trainings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Technical Trainings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {trainingAreas.technical.map(skill => (
                                <li key={skill} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /><span className="text-muted-foreground">{skill}</span></li>
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
                                <li key={skill} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /><span className="text-muted-foreground">{skill}</span></li>
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
                                <li key={skill} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /><span className="text-muted-foreground">{skill}</span></li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-headline text-3xl font-semibold text-center mb-8">Our Beneficiaries</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-3 columns-1 md:columns-2">
                        {beneficiaries.map((beneficiary, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{beneficiary}</span>
                          </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
       </section>
    </div>
  );
}
