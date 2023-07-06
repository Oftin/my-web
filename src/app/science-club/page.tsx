"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TextParagraph, WhiteAndGreenText } from "@/components/text";
import { Column, FlexColumn } from "@/components/wrappers/columns";

export default function ScienceClub() {
  return (
    <>
      <Navbar />
      <FlexColumn
        items="start"
        justify="center"
        layoutMargin
        styles={`width: 100%; height:100vh`}
      >
        <WhiteAndGreenText
          firstText={"University"}
          secondText={"Time"}
          textSize={"32px"}
        />
        <WhiteAndGreenText
          firstText={"Science"}
          secondText={"Club"}
          textSize={"48px"}
        />
        <FlexColumn items={"center"} justify={"center"}>
          <Column numberOfColumns={2}>
            <div
              style={{
                backgroundColor: "pink",
                width: 500,
                height: 500,
                marginTop: "5rem",
              }}
            ></div>
            <div style={{ marginLeft: "-5rem" }}>
              <TextParagraph
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                }
                size="24px"
                styles="margin-top: 5rem;"
              />
              <TextParagraph
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                }
                size="24px"
                styles="margin-top: 1rem; margin-bottom: 1rem"
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
      </FlexColumn>
      <Footer />
    </>
  );
}
