"use client";

import { Navbar } from "@/components/navbar";
import { MainPageWrapper } from "./styled";
import { HelloSection } from "./HelloSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <MainPageWrapper>
        <HelloSection />
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
      </MainPageWrapper>
    </main>
  );
}
