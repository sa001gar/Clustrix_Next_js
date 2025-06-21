import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/stats-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"
import { WorkProcessSection } from "@/components/home/work-process-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { ServicesTicker } from "@/components/home/services-ticker"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesTicker />
      <AboutSection />
      <ServicesSection />
      <ServicesTicker />
      <WhyChooseUsSection />
      <WorkProcessSection />
      <ServicesTicker />
      <PortfolioSection />
      <ServicesTicker />
      <TestimonialsSection />
      <CTASection />
      {/* <ServicesTicker /> */}
      <Footer />
    </div>
  )
}
