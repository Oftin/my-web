"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Column, FlexColumn } from "@/components/wrappers/columns";
import { Icons } from "@/components/icons";
import { TextParagraph, WhiteAndGreenText } from "@/components/text";
import { Footer } from "@/components/footer";

export default function About() {
  return (
    <>
      <Navbar />
      <FlexColumn items="center" justify="center">
        <Column numberOfColumns={2} styles="height: 100vh">
          <Image
            src={Icons.HexagonIcon}
            alt="Hexagon Icon"
            width={550}
            height={550}
            style={{ margin: "auto" }}
          />
          <div
            style={{
              width: "45vw",
              margin: "auto",
            }}
          >
            <WhiteAndGreenText
              firstText="About"
              secondText="Me"
              textSize="48px"
              styles="margin-bottom: 1rem"
            />
            <TextParagraph
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              size="24px"
              styles="margin-bottom: 1rem"
            />
            <TextParagraph
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              size="24px"
              styles="margin-bottom: 1rem"
            />
            <TextParagraph
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              size="24px"
            />
          </div>
        </Column>
      </FlexColumn>
      <Footer />
    </>
  );
}
