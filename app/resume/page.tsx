import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Resume</h1>
      
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Professional Summary</h2>
        <p className="text-sm sm:text-base">
          Experienced full-stack developer and entrepreneur with a proven track record
          of building and scaling web applications. Founder of Soundlink and AppCat,
          demonstrating strong leadership and innovation in the tech industry.
        </p>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-semibold">Founder & Lead Developer, Soundlink</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">2020 - Present</p>
          <ul className="list-disc list-inside mt-2 text-sm sm:text-base">
            <li>Developed and launched a community platform for creatives</li>
            <li>Grew user base to over 10,000 within the first year</li>
            <li>Implemented real-time features and scalable architecture</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold">Founder, AppCat</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">2021 - Present</p>
          <ul className="list-disc list-inside mt-2 text-sm sm:text-base">
            <li>Assist non-coders in professionalizing AI coding projects</li>
            <li>Provide consultation on scaling and deployment strategies</li>
            <li>Successfully helped over 50 clients launch their AI applications</li>
          </ul>
        </div>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-sm sm:text-base">
          <li>Full-stack Development (React, Node.js, Next.js)</li>
          <li>Database Management (MongoDB, PostgreSQL)</li>
          <li>Cloud Services (AWS, Google Cloud)</li>
          <li>AI and Machine Learning Integration</li>
          <li>UI/UX Design</li>
          <li>Agile Project Management</li>
        </ul>
      </section>

      <Button asChild className="w-full sm:w-auto">
        <a href="/your-name-resume.pdf" download>Download Full Resume (PDF)</a>
      </Button>
    </div>
  );
}