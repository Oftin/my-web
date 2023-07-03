"use client";

import { Navbar } from "@/components/navbar";
import { MainPageWrapper } from "./styled";
import { HelloSection } from "./HelloSection";
import { AboutSection } from "./AboutSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <MainPageWrapper>
        <HelloSection />
        <AboutSection />
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
      </MainPageWrapper>
    </main>
  );
}
