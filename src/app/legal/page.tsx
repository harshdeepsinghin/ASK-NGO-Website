import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

const legalInfo = [
    {
        title: "Registration",
        details: [
            { label: "Registered under", value: "Indian Trusts Act, 1882" },
            { label: "Registration Number", value: "IV-040300188" },
            { label: "Date of Registration", value: "August 24, 2021" },
        ],
    },
    {
        title: "Tax Information",
        details: [
            { label: "PAN Number", value: "AABTAXXXXX" },
        ],
    },
    {
        title: "Tax Exemption Approvals",
        details: [
            { label: "Section 12A", value: "Approved - AADTAXXXXXAXXXXXX" },
            { label: "Section 80G", value: "Approved - AADTAXXXXXAXXXXXX" },
            { label: "Details", value: "Donations are eligible for a 50% tax deduction under section 80G of the Income Tax Act." },
        ],
    },
    {
        title: "CSR Compliance",
        details: [
            { label: "CSR Registration Number", value: "CSR000XXXXX" },
            { label: "Compliance Status", value: "Fully compliant for receiving CSR funds." },
        ],
    },
];

export default function LegalPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Legal &amp; Tax Information</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
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
                                    <CardTitle className="font-headline flex items-center gap-3">
                                        <BadgeCheck className="h-6 w-6 text-accent" />
                                        {section.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {section.details.map((item, index) => (
                                            <li key={index} className="flex flex-col sm:flex-row">
                                                <span className="font-semibold w-full sm:w-1/3">{item.label}:</span>
                                                <span className="text-muted-foreground w-full sm:w-2/3">{item.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                             </Card>
                        ))}
                    </div>
                     <div className="mt-12 text-center text-sm text-muted-foreground bg-secondary/50 p-4 rounded-md">
                        <p><strong>Disclaimer:</strong> The PAN and registration numbers have been partially masked for security reasons. Complete details can be provided upon request for due diligence purposes. Please contact us for any further information.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
