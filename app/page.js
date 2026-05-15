import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { Benefits } from "@/components/Benefits/Benefits";
import { Products } from "@/components/Products/Products";
import { WhyBuy } from "@/components/WhyBuy/WhyBuy";
import { Footer } from "@/components/Footer/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";

const Testimonials = dynamic(
  () =>
    import("@/components/Testimonials/Testimonials").then((m) => m.Testimonials),
  { ssr: true, loading: () => null }
);

const VideoSection = dynamic(
  () =>
    import("@/components/VideoSection/VideoSection").then((m) => m.VideoSection),
  { ssr: true, loading: () => null }
);

const CTASection = dynamic(
  () => import("@/components/CTASection/CTASection").then((m) => m.CTASection),
  { ssr: true, loading: () => null }
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <VideoSection />
        <WhyBuy />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
