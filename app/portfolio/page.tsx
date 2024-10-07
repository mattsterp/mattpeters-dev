import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe",
    tech: ["Next.js", "React", "Node.js", "Stripe", "MongoDB"],
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather app with location-based forecasts",
    tech: ["Vue.js", "OpenWeatherMap API", "Vuetify", "Axios"],
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}