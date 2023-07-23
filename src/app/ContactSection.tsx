import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { WhiteAndGreenText, Text } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { colors } from "@/styles/colors";
import { scrollUserToTopView } from "@/helpers";
import { Images } from "@/components/images";
import Link from "next/link";
import styled from "styled-components";

interface ContactSectionProps {
  backgroundColor: string;
}

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const ContactSection = ({ backgroundColor }: ContactSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="contact">
      <ContactSectionWrapper>
        <WhiteAndGreenText
          firstText="Get In"
          secondText="Touch!"
          textSize="32px"
        />

        <Text text="Contact Me" color={colors.white} size="48px" />

        <CallToActionButton
          name="Contact Form"
          href="/contact"
          onClick={() => scrollUserToTopView()}
        />

        <Text
          text="or"
          color={colors.greenThemeColor}
          size="24px"
          styles="margin-top: 2rem; margin-bottom: 2rem "
        />

        <Link
          href={"https://www.linkedin.com/in/kamil-bobrowski-a8a276193/"}
          target="_blank"
        >
          <Image
            src={Images.LinkedIn}
            alt=""
            width={200}
            style={{
              borderRadius: "8px",
            }}
          />
        </Link>
      </ContactSectionWrapper>
    </PagePosition>
  );
};
