import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WordPressBlockThemeProject() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">WordPress Block Theme: Modern and Flexible Web Design</h1>
      
      <section className="mb-8 sm:mb-12">
        <div className="relative h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src="https://source.unsplash.com/random/1200x800/?wordpress,theme"
            alt="WordPress Block Theme Overview"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Project Overview</h2>
        <p className="mb-4 text-lg">
          This WordPress Block Theme is a cutting-edge, flexible theme that leverages the power of the
          WordPress block editor (Gutenberg) to provide users with unprecedented control over their website's
          design and content. Built with modern web standards and best practices, this theme offers a seamless
          editing experience while maintaining high performance and accessibility.
        </p>
        <p className="mb-4 text-lg">
          Key features of the WordPress Block Theme include:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Full site editing capabilities, allowing users to customize every aspect of their site</li>
          <li>A library of pre-designed block patterns for quick and easy page building</li>
          <li>Custom block styles to enhance the visual appeal of core WordPress blocks</li>
          <li>Responsive design ensuring a great user experience across all devices</li>
          <li>Built-in dark mode support with easy toggling</li>
          <li>Performance optimizations for fast page load times</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Technical Highlights</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Developed using modern PHP practices and WordPress coding standards</li>
          <li>Utilized JavaScript and React for custom block development</li>
          <li>Implemented CSS custom properties for easy theme customization</li>
          <li>Integrated with popular plugins like WooCommerce and Yoast SEO</li>
          <li>Optimized asset loading for improved Core Web Vitals scores</li>
          <li>Extensive use of WordPress theme.json for global styling and block controls</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Impact and Achievements</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Featured on the WordPress.org theme directory, garnering over 10,000 active installations</li>
          <li>Received a 5-star rating from the WordPress theme review team</li>
          <li>Adopted by several high-profile websites, including popular blogs and small business sites</li>
          <li>Contributed to the WordPress community through open-source code and educational content</li>
          <li>Reduced average site building time by 40% for users compared to traditional themes</li>
        </ul>
      </section>

      <Button asChild size="lg" className="w-full sm:w-auto">
        <a href="https://wordpress-block-theme-demo.com" target="_blank" rel="noopener noreferrer">View Demo</a>
      </Button>
    </div>
  );
}