import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import AchievementsSection from "@/components/achievements-section"
import ContactSection from "@/components/contact-section"
import CursorEffect from "@/components/cursor-effect"

export default function Home() {
  return (
    <div className="animated-bg">
      <CursorEffect />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  )
}
