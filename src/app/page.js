import Splash from "./components/splash/splash";
import AboutPage from "./about/page";
import ExperiencePage from "./experience/experience";
import SkillsPage from "./skills/page";
import ProjectPage from "./projects/page";
import Footer from "./components/footer/footer";

import GlowingCursorContainer from "./components/divcontainers/glowingCursor";
import SideBar from "./components/navigation/sideBar";

export default function Home() {
  return (
    <>
      <Splash />
      <div className="flex featured">
        <SideBar />
        <div className="overflow-auto mobileFeatureWidth">
          <AboutPage />
          
          <GlowingCursorContainer>
            <ExperiencePage />
            <SkillsPage />

            <ProjectPage />
          </GlowingCursorContainer>
        </div>
      </div>
      <Footer />
    </>
  );
}
