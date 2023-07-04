"use client";

import { Navbar } from "@/components/navbar";
import { MainPageWrapper } from "./styled";
import { HelloSection } from "./HelloSection";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { AdditionalActivitiesSection } from "./AdditionalActivitiesSection";
import { SkillSection } from "./SkillSection";
import { BlogSection } from "./BlogSection";
import { ProjectSection } from "./ProjectSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "@/components/footer";
import { colors } from "@/styles/colors";

export default function Home() {
  return (
    <main>
      <Navbar />
      <MainPageWrapper>
        <HelloSection />
        <AboutSection />
        <ExperienceSection />
        <SkillSection />
        <EducationSection />
        <AdditionalActivitiesSection />
        <BlogSection />
        <ProjectSection />
        <ContactSection />
      </MainPageWrapper>
      <Footer backgroundColor={colors.background.ebonyClay} />
    </main>
  );
}
