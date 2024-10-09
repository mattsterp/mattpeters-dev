import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }));
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const fullPath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-600 mb-8">{data.date}</p>
      <div className="prose lg:prose-xl">
        <MDXRemote source={content} />
      </div>
    </div>
  );
}
