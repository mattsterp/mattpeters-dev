"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Soundlink",
    description: "An event hosting and community application for creatives",
    slug: "soundlink",
    image: "https://source.unsplash.com/random/800x600/?music,event",
    tags: ["React", "Node.js", "MongoDB", "WebSockets"],
  },
  {
    title: "AppCat",
    description: "Helping non-coders professionalize their AI coding projects",
    slug: "appcat",
    image: "https://source.unsplash.com/random/800x600/?artificial-intelligence,code",
    tags: ["Python", "TensorFlow", "Docker", "AWS"],
  },
  {
    title: "WaaS Platform",
    description: "A comprehensive Website as a Service platform for businesses",
    slug: "waas-platform",
    image: "https://source.unsplash.com/random/800x600/?website,service",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "WordPress Block Theme",
    description: "A modern, flexible WordPress theme using the block editor",
    slug: "wordpress-block-theme",
    image: "https://source.unsplash.com/random/800x600/?wordpress,theme",
    tags: ["WordPress", "PHP", "JavaScript", "CSS", "Gutenberg"],
  },
];

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = selectedTags.length > 0
    ? projects.filter(project => selectedTags.some(tag => project.tags.includes(tag)))
    : projects;

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Projects</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Filter by Technology:</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardContent className="pt-0">
              <Link href={`/projects/${project.slug}`} className="text-primary hover:underline">
                View Project
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}