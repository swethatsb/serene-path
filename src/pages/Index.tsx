import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <EmergencyBanner />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
