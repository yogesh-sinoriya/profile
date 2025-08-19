import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProfileSummary from "@/components/profile-summary";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-gray-50">
      <Navigation />
      <HeroSection />
      <ProfileSummary />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
