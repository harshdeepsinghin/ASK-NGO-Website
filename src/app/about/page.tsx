import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Goal, HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  // Environment variable to handle the GitHub Pages pathing
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const leadershipMessages = [
    {
      name: "Rajveer Singh",
      role: "President & Founder",
      message: "With aims for the growth of our country, ASK trust was established for women empowerment, livelihood generation for the underprivileged, especially jail inmates and women self-help groups. We also work for the development of the youth. Our aim is not just teaching people but to empower them with the abilities to have access to all the basic necessities of life, enabling them to earn respect and dignity for themselves and their future. The backbone of ASK trust is its Team, Sponsors, Volunteers, and all supporters.",
      //  Dynamic path applied to local image
      imageUrl: `${basePath}/images/NGO_founder.jpeg`
    },
    {
      name: "Mr. George Ivan Gregory Mann",
      role: "Guardian & Advisor",
      message: "Ever since its inception, the Ex-students of Carman School along with Mr. and Mrs. Rajveer Singh have been taking up various tasks by which society in general and the poor and needy in particular have benefitted. We at ASK are extremely grateful to God and to the many people in this State who have come forward to help us achieve the goals we have set from time to time. Thank you and may God Bless us all.",
      imageUrl: `${basePath}/images/Guardian Ask.jpeg`
    },
  ];

  return (
    <>
      <section className="bg-[hsl(20,85%,65%)] py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold opacity-0 animate-slide-up">
            About Ardas Samaj Kalyan Trust
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground opacity-0 animate-reveal [animation-delay:420ms]">
            Learn about our roots, our mission, and the dedicated people driving our vision for a better society.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src={`${basePath}/images/designed_by_raunak.png`}
                alt="NGO team working" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg" 
                data-ai-hint="team collaboration"
              />
            </div>
            <div>
              <h2 className="font-headline text-4xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Ardas Samaj Kalyan (ASK) was founded on the principles of compassion and service, with the goal of addressing deep-rooted social inequalities. Our journey started in Dehradun, driven by a desire to provide meaningful opportunities to those left behind by society—prisoners seeking a second chance, women striving for financial independence, and youth in need of guidance.
              </p>
              <p className="text-muted-foreground">
                From a small initiative, we have grown into a registered NGO, expanding our programs and partnerships to create a wider, more lasting impact. We believe in grassroots action and work directly with communities to build trust and deliver effective, sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            
          
            <Card className="bg-card text-card-foreground border transition-all duration-300 hover:bg-neutral-950 hover:text-white hover:scale-[1.03] hover:shadow-xl">
              <CardHeader>
                <HeartHandshake className="h-10 w-10 mx-auto text-primary"/>
                <CardTitle className="font-headline mt-2">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To empower marginalized individuals through skill development, education, and support, fostering a self-reliant and equitable society.</p>
              </CardContent>
            </Card>
             
            
            <Card className="bg-card text-card-foreground border transition-all duration-300 hover:bg-neutral-950 hover:text-white hover:scale-[1.03] hover:shadow-xl">
              <CardHeader>
                <Eye className="h-10 w-10 mx-auto text-primary"/>
                <CardTitle className="font-headline mt-2">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We envision a world where every person has the opportunity to achieve their full potential and live a life of dignity and purpose.</p>
              </CardContent>
            </Card>
             
          
            <Card className="bg-card text-card-foreground border transition-all duration-300 hover:bg-neutral-950 hover:text-white hover:scale-[1.03] hover:shadow-xl">
              <CardHeader>
                <Goal className="h-10 w-10 mx-auto text-primary"/>
                <CardTitle className="font-headline mt-2">Our Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To rehabilitate prisoners, support women's SHGs, guide at-risk youth, and build strong community partnerships for sustainable social change.</p>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-extrabold text-[#222222] animate-divine-pulse text-center mb-4">Messages from Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipMessages.map((member) => (
              <Card key={member.name} className="flex flex-col items-center text-center bg-background transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:bg-gradient-to-br hover:from-background hover:to-[rgba(249,138,20,0.20)]">
                <CardHeader>
                  <Avatar className="w-24 h-24 border-[3px] border-[rgba(249,138,20,0.8)] rounded-2xl">
                    <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint="portrait professional" />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent>
                  <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-4 text-muted-foreground italic">"{member.message}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}