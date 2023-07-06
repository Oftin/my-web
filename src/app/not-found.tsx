"use client";

import { CallToActionButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Text } from "@/components/text";
import { FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <FlexColumn
        items="center"
        justify="center"
        styles={`background-color: ${colors.background.ebonyClay}; height: 100vh;`}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Text text="4" color={colors.white} size="notFound" />
          <Text text="0" color={colors.greenThemeColor} size="notFound" />
          <Text text="4" color={colors.white} size="notFound" />
        </div>

        <Text
          text="Page Not Found"
          color={colors.greenThemeColor}
          size="36px"
        />

        <FlexColumn
          items="center"
          justify="center"
          styles="width: 100vh; margin-top: 1rem"
        >
          <Text
            text="If you have great idea about new page"
            color={colors.white}
            size="20px"
          />
          <Text
            text="send mail with this idea to me!"
            color={colors.white}
            size="20px"
          />
        </FlexColumn>

        <CallToActionButton name="Contact Form" href="/not-found-contact" />
      </FlexColumn>
      <Footer backgroundColor={colors.background.mirage} />
    </>
  );
}
