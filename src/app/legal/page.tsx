import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

const legalInfo = [
    {
        title: "Registration",
        details: [
            { label: "Registered under", value: "Indian Trusts Act, 1882" },
            { label: "Registration Number", value: "IV-040300188" },
            { label: "Date of Registration", value: "December 13, 2018" },
        ],
    },
    {
        title: "NITI Aayog / NGO Darpan",
        details: [
            { label: "NITI Aayog Unique ID", value: "UA 2020 0259841" },
        ],
    },
    {
        title: "Tax Information",
        details: [
            { label: "PAN Number", value: "AAHTA4244R" },
        ],
    },

    {
        title: "CSR Compliance",
        details: [
            { label: "CSR Registration Number", value: "CSR00032760" },
            { label: "Date of Registration", value: "27-06-2022" },
            { label: "Compliance Status", value: "Fully compliant for receiving CSR funds." },
        ],
    },
];

export default function LegalPage() {
    return (
        <>
       
      <section className="bg-[hsl(20,85%,65%)] py-12">
        <div className="container mx-auto px-4 text-center">
          
          <h1 className="font-headline text-4xl md:text-5xl font-bold opacity-0 animate-slide-up">
            Legal &amp; Tax Information
          </h1>
          
         
          <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground opacity-0 animate-reveal  [animation-delay:420ms]">
            We are committed to maintaining complete transparency in our operations. Here are our legal and tax credentials.
          </p>
          
        </div>
      </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8">
                        {legalInfo.map((section) => (
        <Card key={section.title}>
    <CardHeader>
      
        <CardTitle className="font-headline text-3xl font-extrabold text-[#222222] animate-divine-pulse flex items-center gap-3">
            <BadgeCheck className="h-6 w-6 text-accent shrink-0" />
            {section.title}
        </CardTitle>
    </CardHeader>
    <CardContent>
        <ul className="space-y-3">
            {section.details.map((item, index) => (
                <li 
                    key={index} 
                    className="flex flex-col sm:flex-row transition-all duration-300 hover:text-[hsl(20,85%,49%)] hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.8)] cursor-pointer group"
                >
                    <span className="font-semibold w-full sm:w-1/3 transition-colors duration-300 group-hover:text-[hsl(20,85%,49%)]">
                        {item.label}:
                    </span>
                    <span className="text-muted-foreground w-full sm:w-2/3 transition-colors duration-300 group-hover:text-foreground">
                        {item.value}
                    </span>
                </li>
            ))}
        </ul>
    </CardContent>
</Card>                   
                        ))}
                    </div>
                     <div className="mt-12 text-center text-sm text-muted-foreground bg-secondary/50 p-4 rounded-md">
                        <p><strong>Disclaimer:</strong> Full legal documents can be provided upon request for due diligence purposes. Please contact us for any further information.</p>
                    </div>
                </div>
            </section>
       
        </>
    );
}
