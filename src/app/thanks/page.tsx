"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThanksWrapper, MainText, SecondText } from "./styled";

export default function Thanks() {
  return (
    <>
      <Navbar showArrowBack={false} />
      <ThanksWrapper>
        <MainText>Thanks</MainText>
        <SecondText>for</SecondText>
        <MainText>Message!</MainText>
      </ThanksWrapper>
      <Footer />
    </>
  );
}
