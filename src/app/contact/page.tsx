"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WhiteAndGreenText, Text } from "@/components/text";
import { Column, FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";

export default function Contact() {
  return (
    <>
      <Navbar />
      <FlexColumn items={"center"} justify={"center"} styles={"height: 100vh;"}>
        <WhiteAndGreenText
          firstText={"Get In"}
          secondText={"Touch!"}
          textSize={"32px"}
        />

        <Text text={"Contact Me"} color={colors.white} size={"48px"} />

        <Column
          numberOfColumns={2}
          gap={30}
          styles="margin-top: 45px; margin-bottom: 45px;"
        >
          <input
            placeholder="Enter your name"
            style={{
              width: "315px",
              height: "60px",
              backgroundColor: `${colors.background.ebonyClay}`,
              border: "none",
              padding: "15px",
              paddingLeft: "30px",
              paddingRight: "30px",
              borderRadius: "8px",
              color: `${colors.white}`,
            }}
          />
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "315px",
              height: "60px",
              backgroundColor: `${colors.background.ebonyClay}`,
              border: "none",
              padding: "15px",
              paddingLeft: "30px",
              paddingRight: "30px",
              borderRadius: "8px",
              color: `${colors.white}`,
            }}
          />
        </Column>

        <input
          placeholder="Enter your message"
          style={{
            width: "660px",
            height: "250px",
            backgroundColor: `${colors.background.ebonyClay}`,
            border: "none",
            padding: "15px",
            paddingLeft: "30px",
            paddingRight: "30px",
            borderRadius: "8px",
            textAlign: "start",
            color: `${colors.white}`,
          }}
        />

        <button
          style={{
            width: "285px",
            height: "85px",
            padding: "auto",
            backgroundColor: `${colors.greenThemeColor}`,
            color: `${colors.white}`,
            fontSize: "24px",
            fontWeight: 700,
            border: "none",
            borderRadius: "8px",
            marginTop: "45px",
          }}
        >
          Send Message
        </button>
      </FlexColumn>
      <Footer />
    </>
  );
}
