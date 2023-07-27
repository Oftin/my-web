"use client";

import { Navbar } from "@/components/navbar";
import { HelloSection } from "./sections/HelloSection";
import { AboutSection } from "./sections/AboutSection/";
import { ExperienceSection } from "./sections/ExperienceSection/";
import { SkillSection } from "./sections/SkillSection/";
import { EducationSection } from "./sections/EducationSection";
import { AdditionalActivitiesSection } from "./sections/AdditionalActivitiesSection/";
// import { ProjectSection } from "./sections/ProjectSection";
// import { BlogSection } from "./sections/BlogSection";
import { ContactSection } from "./sections/ContactSection/";
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
      <Footer />
    </main>
  );
}
