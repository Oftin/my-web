import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { colors } from "@/styles/colors";
import { Images } from "@/components/images";
import { ImageWithLink } from "@/components/Modifiers";
import { MainText, SecondText } from "@/components/text";
import { ContactSectionWrapper } from "./styled";
import { ContactSectionProps } from "./types";

export const ContactSection = ({ backgroundColor }: ContactSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="contact">
      <ContactSectionWrapper>
        <SecondText>
          Get In{" "}
          <span style={{ color: `${colors.greenThemeColor}` }}>Touch!</span>
        </SecondText>

        <MainText>Contact Me</MainText>

        <CallToActionButton name="Contact Form" href="/contact" margin="1rem" />

        <SecondText>or</SecondText>

        <ImageWithLink
          href="https://www.linkedin.com/in/kamil-bobrowski-a8a276193/"
          src={Images.LinkedIn}
          alt="LinkedIn"
          margin="1rem"
        />
      </ContactSectionWrapper>
    </PagePosition>
  );
};
