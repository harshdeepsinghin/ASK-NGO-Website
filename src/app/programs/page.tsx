import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

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

export default function ProgramsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Programs</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            We believe in creating targeted, impactful programs that address the specific needs of the communities we serve.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
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
    </div>
  );
}
