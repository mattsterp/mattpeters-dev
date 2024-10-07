import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const caseStudies = [
  {
    title: "Soundlink",
    description: "An event hosting and community application for creatives",
    slug: "soundlink",
  },
  {
    title: "AppCat",
    description: "Helping non-coders professionalize their AI coding projects",
    slug: "appcat",
  },
  // Add more case studies as needed
];

export default function CaseStudies() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Case Studies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {caseStudies.map((study, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">{study.title}</CardTitle>
              <CardDescription className="text-sm sm:text-base">{study.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link href={`/case-studies/${study.slug}`} className="text-primary hover:underline text-sm sm:text-base">
                Read Case Study
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}