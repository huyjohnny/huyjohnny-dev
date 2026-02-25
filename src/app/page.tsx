import Navbar from "../components/layout/Navbar";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import { siteContent } from "../content/site";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />

        <footer className="pb-9 pt-2">
          <div className="container-page border-t border-border/40 pt-6 text-xs tracking-wide text-muted-2">
            {siteContent.footer.note}
          </div>
        </footer>
      </main>
    </div>
  );
}
