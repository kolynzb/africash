import SectionTitle from "@/components/common/section-title";
import Brands from "@/components/sections/brands";
import Content from "@/components/sections/content";
import ContentTwo from "@/components/sections/content-two";
import CTA from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import NewsletterSection from "@/components/sections/newsletter-section";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen ">
      <Hero />
      <Brands />

      <Content />
      <ContentTwo />
      <Testimonials />
      <CTA />
      <NewsletterSection />
    </main>
  );
}
