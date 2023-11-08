import SectionTitle from "@/components/common/section-title";
import Brands from "@/components/sections/brands";
import Content from "@/components/sections/content";
import ContentTwo from "@/components/sections/content-two";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen ">
      <Hero />
      <Brands />

      <Content />
      {/* <ContentTwo /> */}
    </main>
  );
}
