"use client";

import { CallToActionButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { PagePosition } from "@/components/wrappers/pagePosition";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 100%;
  height: 100vh;
`;

export default function NotFound() {
  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.ebonyClay}>
        <NotFoundWrapper>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Text text="4" color={colors.white} size="notFound" />
            <Text text="0" color={colors.greenThemeColor} size="notFound" />
            <Text text="4" color={colors.white} size="notFound" />
          </div>
          <Text
            text="Page Not Found"
            color={colors.greenThemeColor}
            size="36px"
            styles="margin-bottom: 1rem;"
          />
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
          <CallToActionButton name="Contact Form" href="/not-found-contact" />
        </NotFoundWrapper>
      </PagePosition>
      <Footer backgroundColor={colors.background.mirage} />
    </>
  );
}
