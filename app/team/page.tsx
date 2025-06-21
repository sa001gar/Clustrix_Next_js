import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TeamSection } from "@/components/home/team-section"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TeamSection />
      <Footer />
    </div>
  )
}
