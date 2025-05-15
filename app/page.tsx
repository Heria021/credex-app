import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { BenefitsSection } from "@/components/sections/benefits";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactFormSection } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <main className="mx-auto">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactFormSection />
    </main>
  );
}
