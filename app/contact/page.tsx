"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import Image from "next/image";

const EMAIL_ADDRESS = "mattsterp@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/mattsterp";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setIsCopied(true);
      toast({
        title: "Email copied!",
        description: "The email address has been copied to your clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
      toast({
        title: "Copy failed",
        description: "Please try again or use the 'Open Mail Client' button.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop"
          alt="Matthew's portrait"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
          <p className="mb-4">
            I&apos;m always open to new opportunities and collaborations. If
            you&apos;d like to get in touch, you can reach out to me via
            LinkedIn or email. I&apos;ll do my best to respond as soon as
            possible.
          </p>
          <p className="mb-4">
            LinkedIn:{" "}
            <Link
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Matthew&apos;s LinkedIn Profile
            </Link>
          </p>
          <p className="mb-4">
            Email:{" "}
            <Link
              href={`mailto:${EMAIL_ADDRESS}`}
              className="text-blue-600 hover:underline"
            >
              Email Matthew
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
