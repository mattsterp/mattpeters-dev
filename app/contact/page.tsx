"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

const EMAIL_ADDRESS = "mattsterp@gmail.com";

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
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
        Contact Me
      </h1>
      <div className="max-w-lg mx-auto space-y-4">
        <p className="text-lg mb-4">
          Feel free to reach out to me using one of the options below:
        </p>
        <Button onClick={copyEmailToClipboard} className="w-full mb-2">
          {isCopied ? "Copied!" : "Copy Email Address"}
        </Button>
        <Button asChild className="w-full">
          <Link href={`mailto:${EMAIL_ADDRESS}`}>Open Mail Client</Link>
        </Button>
      </div>
    </div>
  );
}
