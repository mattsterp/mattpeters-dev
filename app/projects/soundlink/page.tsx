import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SoundlinkProject() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Soundlink: Connecting Creatives</h1>
      
      <section className="mb-8 sm:mb-12">
        <div className="relative h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src="https://source.unsplash.com/1200x800/?music,collaboration"
            alt="Soundlink Application Overview"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Project Overview</h2>
        <p className="mb-4 text-lg">
          Soundlink is an innovative event hosting and community application designed
          specifically for creatives in the music and arts industry. It provides a
          platform for artists, musicians, and other creative professionals to connect,
          collaborate, and showcase their work.
        </p>
        <p className="mb-4 text-lg">
          The platform allows users to:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Create and manage events, from intimate gigs to large festivals</li>
          <li>Discover and connect with other creatives in their area or by genre</li>
          <li>Showcase their portfolio and promote their work</li>
          <li>Collaborate on projects through integrated messaging and file-sharing tools</li>
          <li>Sell tickets and merchandise directly through the platform</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Technical Highlights</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Built with React and Next.js for a fast, SEO-friendly frontend</li>
          <li>Node.js and Express backend with GraphQL API for efficient data querying</li>
          <li>Real-time features implemented using WebSockets for live event updates and chat</li>
          <li>Integrated payment processing with Stripe for ticket and merchandise sales</li>
          <li>Responsive design ensuring a seamless experience across all devices</li>
          <li>Deployed on AWS with a scalable architecture to handle high traffic during popular events</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Impact and Achievements</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Over 50,000 registered users within the first year of launch</li>
          <li>Successfully hosted more than 5,000 events across various creative disciplines</li>
          <li>Facilitated collaborations between 10,000+ artists, leading to numerous successful projects</li>
          <li>Featured in major tech and music industry publications</li>
          <li>Achieved a 4.8/5 star rating on app stores with over 10,000 reviews</li>
        </ul>
      </section>

      <Button asChild size="lg" className="w-full sm:w-auto">
        <a href="https://soundlink.com" target="_blank" rel="noopener noreferrer">Visit Soundlink</a>
      </Button>
    </div>
  );
}