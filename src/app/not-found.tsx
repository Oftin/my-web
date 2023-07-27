"use client";

import { CallToActionButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { colors } from "@/styles/colors";
import { NotFoundWrapper, MainText, SecondText, ThirdText } from "./styled";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.ebonyClay}>
        <NotFoundWrapper>
          <MainText>
            <div>4</div>
            <span style={{ color: `${colors.greenThemeColor}` }}>0</span>
            <div>4</div>
          </MainText>

          <SecondText>Page Not Found</SecondText>

          <ThirdText margin="1rem 0">
            <div>If you have great idea about new page</div>
            <div>send mail with this idea to me!</div>
          </ThirdText>

          <CallToActionButton
            name="Contact Form"
            href="/not-found-contact#top"
          />
        </NotFoundWrapper>
      </PagePosition>
      <Footer backgroundColor={colors.background.mirage} />
    </>
  );
}
