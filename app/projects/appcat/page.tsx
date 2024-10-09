import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AppCatProject() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
        AppCat: Empowering Non-Coders in AI
      </h1>

      <section className="mb-8 sm:mb-12">
        <div className="relative h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src="https://source.unsplash.com/1200x800/?artificial-intelligence,technology"
            alt="AppCat Service Overview"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Project Overview
        </h2>
        <p className="mb-4 text-lg">
          AppCat is an innovative service designed to help non-coders transform
          their AI coding projects into professional-grade applications ready
          for scaling and deployment. We provide consultation and technical
          expertise to bridge the gap between AI concepts and practical
          implementation.
        </p>
        <p className="mb-4 text-lg">Our services include:</p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>AI project assessment and feasibility studies</li>
          <li>Custom AI model development and fine-tuning</li>
          <li>Scalable architecture design for AI applications</li>
          <li>Integration of AI models into web and mobile applications</li>
          <li>Deployment and scaling strategies for AI projects</li>
          <li>Ongoing support and maintenance for AI applications</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Technical Expertise
        </h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>
            Proficiency in major AI frameworks: TensorFlow, PyTorch, and
            scikit-learn
          </li>
          <li>Cloud platform integration: AWS, Google Cloud, and Azure</li>
          <li>Containerization and orchestration with Docker and Kubernetes</li>
          <li>
            CI/CD implementation for AI projects using Jenkins and GitLab CI
          </li>
          <li>Data privacy and security best practices for AI applications</li>
          <li>
            Performance optimization and monitoring for AI models in production
          </li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Success Stories
        </h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>
            Helped a healthcare startup deploy an AI-powered diagnostic tool,
            reducing diagnosis time by 40%
          </li>
          <li>
            Assisted a retail company in implementing an AI-driven inventory
            management system, increasing efficiency by 25%
          </li>
          <li>
            Developed a scalable NLP solution for a media company, processing
            over 1 million articles daily
          </li>
          <li>
            Guided a fintech startup in creating an AI-based fraud detection
            system, reducing fraudulent transactions by 60%
          </li>
          <li>
            Supported an education technology company in building an adaptive
            learning platform, improving student engagement by 35%
          </li>
        </ul>
      </section>

      <Button asChild size="lg" className="w-full sm:w-auto">
        <a href="https://appcat.com" target="_blank" rel="noopener noreferrer">
          Learn More About AppCat
        </a>
      </Button>
    </div>
  );
}
