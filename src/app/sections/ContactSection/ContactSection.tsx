import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { WhiteAndGreenText, Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { Images } from "@/components/images";
import Link from "next/link";
import { ContactSectionWrapper } from "./styled";
import { ContactSectionProps } from "./types";

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

        <CallToActionButton name="Contact Form" href="/contact" />

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
