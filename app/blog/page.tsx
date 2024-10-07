import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const blogPosts = [
  {
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js and why it's a great choice for your next project.",
    date: "2023-04-15",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "The Power of Server-Side Rendering",
    description: "Explore the benefits of server-side rendering and how it improves performance.",
    date: "2023-05-02",
    slug: "power-of-server-side-rendering",
  },
  {
    title: "Building Scalable APIs with Node.js",
    description: "Best practices for creating robust and scalable APIs using Node.js and Express.",
    date: "2023-05-20",
    slug: "building-scalable-apis-nodejs",
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}