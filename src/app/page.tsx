"use client";

import { Navbar } from "@/components/navbar";
import { HelloSection } from "./HelloSection";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { AdditionalActivitiesSection } from "./AdditionalActivitiesSection";
import { SkillSection } from "./SkillSection";
// import { BlogSection } from "./BlogSection";
// import { ProjectSection } from "./ProjectSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "@/components/footer";
import { colors } from "@/styles/colors";

const darkerBackgroundColor = colors.background.mirage;
const brighterBackgroundColor = colors.background.ebonyClay;

export default function Home() {
  return (
    <main>
      <Navbar showArrowBack={false} />
      <HelloSection backgroundColor={darkerBackgroundColor} />
      <AboutSection backgroundColor={brighterBackgroundColor} />
      <ExperienceSection backgroundColor={darkerBackgroundColor} />
      <SkillSection backgroundColor={brighterBackgroundColor} />
      <EducationSection backgroundColor={darkerBackgroundColor} />
      <AdditionalActivitiesSection backgroundColor={brighterBackgroundColor} />
      {/* <ProjectSection backgroundColor={darkerBackgroundColor} /> */}
      {/* <BlogSection backgroundColor={brighterBackgroundColor} /> */}
      <ContactSection backgroundColor={darkerBackgroundColor} />
      <Footer backgroundColor={darkerBackgroundColor} />
    </main>
  );
}
