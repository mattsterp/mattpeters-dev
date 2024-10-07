import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SoundlinkCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Soundlink: Connecting Creatives</h1>
      
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="mb-4 text-sm sm:text-base">
          Soundlink is an innovative event hosting and community application designed
          specifically for creatives in the music and arts industry. It provides a
          platform for artists, musicians, and other creative professionals to connect,
          collaborate, and showcase their work.
        </p>
        <div className="relative h-48 sm:h-64 md:h-96 mb-4">
          <Image
            src="/soundlink-overview.jpg"
            alt="Soundlink Application Overview"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Challenges and Solutions</h2>
        <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
          <li>Implementing real-time event updates and notifications</li>
          <li>Designing an intuitive interface for event creation and management</li>
          <li>Integrating secure payment processing for ticket sales</li>
          <li>Scaling the application to handle high traffic during popular events</li>
        </ul>
        <p className="text-sm sm:text-base">
          To address these challenges, we leveraged technologies such as WebSockets for
          real-time updates, implemented a user-centric design process, integrated Stripe
          for secure payments, and utilized AWS for scalable cloud infrastructure.
        </p>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside text-sm sm:text-base">
          <li>Frontend: React, Next.js</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB</li>
          <li>Real-time: Socket.io</li>
          <li>Payment Processing: Stripe</li>
          <li>Cloud Services: AWS (EC2, S3, CloudFront)</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Results and Impact</h2>
        <p className="mb-4 text-sm sm:text-base">
          Since its launch, Soundlink has achieved significant milestones:
        </p>
        <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
          <li>Over 10,000 registered users within the first year</li>
          <li>Successfully hosted more than 500 events</li>
          <li>Facilitated collaborations between 1,000+ artists</li>
          <li>95% user satisfaction rate based on post-event surveys</li>
        </ul>
      </section>

      <Button asChild className="w-full sm:w-auto">
        <a href="https://soundlink.com" target="_blank" rel="noopener noreferrer">Visit Soundlink</a>
      </Button>
    </div>
  );
}