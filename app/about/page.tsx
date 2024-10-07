import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Background and Experience</h2>
            <p className="mb-4 text-sm sm:text-base">
              Hey there! I'm a passionate full-stack developer with a knack for creating
              innovative solutions. My journey in tech has led me to found two exciting
              ventures: Soundlink and AppCat.
            </p>
            <p className="mb-4 text-sm sm:text-base">
              With Soundlink, I've built a thriving community for creatives, while AppCat
              allows me to help non-coders bring their AI projects to life. These experiences
              have honed my skills in both development and entrepreneurship.
            </p>
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://source.unsplash.com/400x400/?portrait,developer"
              alt="Your Name"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Skills and Expertise</h2>
          <ul className="list-disc list-inside mb-4 text-sm sm:text-base space-y-2">
            <li>Full-stack Development (React, Node.js, Next.js)</li>
            <li>Database Management (MongoDB, PostgreSQL)</li>
            <li>Cloud Services (AWS, Google Cloud)</li>
            <li>AI and Machine Learning Integration</li>
            <li>UI/UX Design</li>
            <li>Agile Project Management</li>
          </ul>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/resume">View Full Resume</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}