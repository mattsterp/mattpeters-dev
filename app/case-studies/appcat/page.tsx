import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AppCatCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">AppCat: Empowering Non-Coders in AI</h1>
      
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="mb-4 text-sm sm:text-base">
          AppCat is an innovative service designed to help non-coders professionalize
          their AI coding projects. We provide consultation and technical expertise
          to transform ideas into scalable, production-ready AI applications.
        </p>
        <div className="relative h-48 sm:h-64 md:h-96 mb-4">
          <Image
            src="/appcat-overview.jpg"
            alt="AppCat Service Overview"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Challenges and Solutions</h2>
        <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
          <li>Bridging the gap between AI concepts and practical implementation</li>
          <li>Designing scalable architectures for AI applications</li>
          <li>Implementing best practices for AI model deployment</li>
          <li>Ensuring data privacy and security in AI projects</li>
        </ul>
        <p className="text-sm sm:text-base">
          To address these challenges, we developed a comprehensive consultation process,
          created educational resources, and implemented a collaborative development approach
          that empowers non-coders while ensuring high-quality, scalable AI solutions.
        </p>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside text-sm sm:text-base">
          <li>AI Frameworks: TensorFlow, PyTorch, scikit-learn</li>
          <li>Cloud Platforms: AWS, Google Cloud, Azure</li>
          <li>Containerization: Docker, Kubernetes</li>
          <li>CI/CD: Jenkins, GitLab CI</li>
          <li>Monitoring: Prometheus, Grafana</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Results and Impact</h2>
        <p className="mb-4 text-sm sm:text-base">
          Since its inception, AppCat has achieved significant milestones:
        </p>
        <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
          <li>Successfully assisted over 50 clients in launching AI applications</li>
          <li>Reduced time-to-market for AI projects by an average of 40%</li>
          <li>Achieved a 95% client satisfaction rate</li>
          <li>Facilitated the creation of 10+ AI startups</li>
        </ul>
      </section>

      <Button asChild className="w-full sm:w-auto">
        <a href="https://appcat.com" target="_blank" rel="noopener noreferrer">Visit AppCat</a>
      </Button>
    </div>
  );
}