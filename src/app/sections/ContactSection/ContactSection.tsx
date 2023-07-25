import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
// import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { Images } from "@/components/images";
import Link from "next/link";
import { ContactSectionWrapper } from "./styled";
import { ContactSectionProps } from "./types";

import styled, { css } from "styled-components";
import { typography } from "@/styles/typography";
import { borderRadius } from "@/styles/borderRadius";

const SecondText = styled.div<{ margin?: string }>`
  color: ${colors.white};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  @media only screen and (max-width: 575px) {
    ${typography.titleTextForScreen["18px"]}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.titleTextForScreen["24px"]}
  }

  @media only screen and (min-width: 768px) {
    ${typography.titleTextForScreen["32px"]}
  }
`;

const MainText = styled.div`
  color: ${colors.white};

  @media only screen and (max-width: 575px) {
    ${typography.titleTextForScreen["28px"]}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.titleTextForScreen["36px"]}
  }

  @media only screen and (min-width: 768px) {
    ${typography.titleTextForScreen["48px"]}
  }
`;

const LinkModifier = styled(Link)`
  @media only screen and (max-width: 575px) {
    width: 136px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: 160px;
  }

  @media only screen and (min-width: 768px) {
    width: 196px;
  }
`;

const ImageModifier = styled(Image)`
  width: 100%;
  height: 100%;
  ${borderRadius["8px"]}
`;

export const ContactSection = ({ backgroundColor }: ContactSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="contact">
      <ContactSectionWrapper>
        {/* <WhiteAndGreenText
          firstText="Get In"
          secondText="Touch!"
          textSize="32px"
        /> */}

        <SecondText>
          Get In{" "}
          <span style={{ color: `${colors.greenThemeColor}` }}>Touch!</span>
        </SecondText>

        {/* <Text text="Contact Me" color={colors.white} size="48px" /> */}

        <MainText>Contact Me</MainText>

        <CallToActionButton name="Contact Form" href="/contact" margin="1rem" />

        {/* <Text
          text="or"
          color={colors.greenThemeColor}
          size="24px"
          styles="margin-top: 2rem; margin-bottom: 2rem "
        /> */}

        <SecondText>or</SecondText>

        <LinkModifier
          href={"https://www.linkedin.com/in/kamil-bobrowski-a8a276193/"}
          target="_blank"
        >
          <ImageModifier src={Images.LinkedIn} alt="" />
        </LinkModifier>
      </ContactSectionWrapper>
    </PagePosition>
  );
};
