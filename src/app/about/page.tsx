"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Column, FlexColumn } from "@/components/wrappers/columns";
import { TextParagraph, WhiteAndGreenText, Text } from "@/components/text";
import { Footer } from "@/components/footer";
import { colors } from "@/styles/colors";
import { Images } from "@/components/images";

export default function About() {
  return (
    <>
      <Navbar />
      <FlexColumn items="center" justify="center">
        <Column columns={2} styles="height: 100vh; margin-top: 4rem;">
          <Image
            src={Images.ERC2019MyPhoto}
            alt=""
            width={550}
            style={{ margin: "auto", borderRadius: "8px" }}
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
      <FlexColumn items={"center"} justify={"center"} styles="height: 100vh">
        <Text text={"Interests"} color={colors.white} size={"48px"} />
        <Column columns={2}>
          <div>
            {[
              "Modern technology",
              "Artificial intelligence",
              "Programming languages",
              "Electronics",
              "Business analytics",
            ].map((el) => {
              return <div key={el}>{el}</div>;
            })}
          </div>
          <div>
            {[
              "Psychology",
              "Reading books",
              "Physical activity",
              "Travels",
              "Dancing",
            ].map((el) => {
              return <div key={el}>{el}</div>;
            })}
          </div>
        </Column>
      </FlexColumn>
      <Footer />
    </>
  );
}
