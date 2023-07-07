"use client";

import { RequestButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import { Input, TextArea } from "@/components/inputs";
import { Navbar } from "@/components/navbar";
import { Text } from "@/components/text";
import { Column, FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";

export default function NotFoundContact() {
  return (
    <>
      <Navbar />
      <FlexColumn items="center" justify="center" styles="height: 100vh;">
        <div style={{ display: "flex", gap: 12 }}>
          <Text text="Idea for" color={colors.white} size="48px" />
          <Text text="New" color={colors.greenThemeColor} size="48px" />
          <Text text="Page" color={colors.white} size="48px" />
        </div>

        <Column
          columns={2}
          gap={20}
          styles="margin-top: 45px; margin-bottom: 45px;"
        >
          <Input
            type="text"
            placeholder="Enter your name"
            width="315px"
            height="60px"
          />

          <Input
            type="email"
            placeholder="Enter your email"
            width="315px"
            height="60px"
          />
        </Column>

        <TextArea
          placeholder="Enter your idea for new page"
          width="650px"
          height="250px"
        />

        <RequestButton
          name="Send Message"
          onClick={() => console.log("Send reqiest!")}
        />
      </FlexColumn>
      <Footer />
    </>
  );
}
