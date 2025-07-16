import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Goal, HeartHandshake } from "lucide-react";
import Image from "next/image";

const leadershipMessages = [
  {
    name: "Rajveer Singh",
    role: "President & Founder",
    message: "With aims for the growth of our country, ASK trust was established for women empowerment, livelihood generation for the underprivileged, especially jail inmates and women self-help groups. We also work for the development of the youth. Our aim is not just teaching people but to empower them with the abilities to have access to all the basic necessities of life, enabling them to earn respect and dignity for themselves and their future. The backbone of ASK trust is its Team, Sponsors, Volunteers, and all supporters.",
    imageUrl: "https://placehold.co/100x100.png"
  },
  {
    name: "Guardian's Message",
    role: "Guardian & Advisor",
    message: "Ever since its inception, the Ex-students of Carman School along with Mr. and Mrs. Rajveer Singh have been taking up various tasks by which society in general and the poor and needy in particular have benefitted. We at ASK are extremely grateful to God and to the many people in this State who have come forward to help us achieve the goals we have set from time to time. Thank you and may God Bless us all.",
    imageUrl: "https://placehold.co/100x100.png"
  },
];


export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About Ardas Samaj Kalyan</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Learn about our roots, our mission, and the dedicated people driving our vision for a better society.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image src="https://placehold.co/600x400.png" alt="NGO team working" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team collaboration"/>
            </div>
            <div>
                <h2 className="font-headline text-3xl font-semibold mb-4">Our Story</h2>
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
                <Card>
                    <CardHeader>
                        <HeartHandshake className="h-10 w-10 mx-auto text-primary"/>
                        <CardTitle className="font-headline mt-2">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">To empower marginalized individuals through skill development, education, and support, fostering a self-reliant and equitable society.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <Eye className="h-10 w-10 mx-auto text-primary"/>
                        <CardTitle className="font-headline mt-2">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We envision a world where every person has the opportunity to achieve their full potential and live a life of dignity and purpose.</p>
                    </CardContent>
                </Card>
                 <Card>
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
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center mb-12">Messages from Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {leadershipMessages.map((member) => (
                    <Card key={member.name} className="flex flex-col items-center text-center">
                        <CardHeader>
                            <Avatar className="w-24 h-24 border-4 border-primary/50">
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
    </div>
  );
}
