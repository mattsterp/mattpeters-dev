import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Matthew J Peters
          </h1>
          <p className="text-xl sm:text-2xl mb-6 text-muted-foreground">
            Full-stack Developer | Creator of Soundlink | Founder of AppCat
          </p>
          <p className="text-lg mb-8">
            Experienced full-stack developer and entrepreneur with a proven
            track record of building and scaling web applications. Specializing
            in innovative solutions for the creative industry and AI integration
            for non-technical clients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop"
              alt="Hero Image"
              width={800}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Soundlink</h3>
            <p className="text-lg mb-6">
              An innovative event hosting and community application designed for
              creatives. Soundlink provides a platform for artists, musicians,
              and other creative professionals to connect, collaborate, and
              showcase their work.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/projects/soundlink">Learn More</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop"
                alt="Soundlink Application Preview"
                width={1200}
                height={800}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop"
                alt="AppCat Service Preview"
                width={1200}
                height={800}
                className="rounded-lg"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">AppCat</h3>
            <p className="text-lg mb-6">
              AppCat is a service that helps non-coders transform their AI
              coding projects into professional-grade applications. We provide
              consultation and technical expertise to bridge the gap between AI
              concepts and practical implementation.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/projects/appcat">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
