"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  ThanksWrapper,
  MainTextForThanks,
  SecondTextForThanks,
} from "./styled";

export default function Thanks() {
  return (
    <>
      <Navbar />
      <ThanksWrapper>
        <MainTextForThanks>Thanks</MainTextForThanks>
        <SecondTextForThanks>for</SecondTextForThanks>
        <MainTextForThanks>Message!</MainTextForThanks>
      </ThanksWrapper>
      <Footer />
    </>
  );
}
