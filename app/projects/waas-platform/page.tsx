import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WaaSPlatformProject() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
        WaaS Platform: Empowering Businesses with Custom Websites
      </h1>

      <section className="mb-8 sm:mb-12">
        <div className="relative h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src="https://source.unsplash.com/random/1200x800/?website,service"
            alt="WaaS Platform Overview"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Project Overview
        </h2>
        <p className="mb-4 text-lg">
          The Website as a Service (WaaS) Platform is a comprehensive solution
          designed to empower Musiciians and Creatives of all types to create,
          manage, and scale their online presence effortlessly. This platform
          combines the flexibility of custom web development with the ease of
          use of traditional website builders.
        </p>
        <p className="mb-4 text-lg">
          Key features of the WaaS Platform include:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Free Soundlink Subdomain</li>
          <li>Drag-and-drop website builder with customizable templates</li>
          <li>Advanced content management system (CMS) for easy updates</li>
          <li>E-commerce functionality with secure payment processing</li>
          <li>SEO optimization tools and analytics integration</li>
          <li>Scalable hosting infrastructure with automatic backups</li>
          <li>Custom domain management and SSL certificate provision</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Technical Highlights
        </h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Built on top of InstaWP a leading WordPress Hosting platform</li>
          <li>
            Designed and Developed Template Websites and reuseable sections
          </li>
          <li>
            Provide end to end supprt for hosted customers of technical topics
          </li>
          <li>AWS infrastructure for scalable and reliable hosting</li>
          <li>
            Implemented CI/CD pipeline for seamless updates and deployments
          </li>
          <li>
            Integrated third-party services for enhanced functionality (e.g.,
            Stripe for payments, Mailchimp for email marketing)
          </li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Impact and Achievements
        </h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>
            Onboarded over 1,000 businesses within the first year of launch
          </li>
          <li>
            Achieved a 98% uptime, ensuring reliable service for all clients
          </li>
          <li>
            Reduced average website creation time from weeks to days for small
            businesses
          </li>
          <li>
            Facilitated over $10 million in e-commerce transactions for platform
            users
          </li>
          <li>
            Received recognition as a "Top Emerging SaaS Platform" by industry
            experts
          </li>
        </ul>
      </section>

      <Button asChild size="lg" className="w-full sm:w-auto">
        <a
          href="https://waas-platform-demo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Demo
        </a>
      </Button>
    </div>
  );
}
