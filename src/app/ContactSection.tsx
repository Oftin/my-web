import Image from "next/image";
import { CallToActionButton } from "@/components/buttons";
import { WhiteAndGreenText, Text } from "@/components/text";
import { FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";

interface ContactSectionProps {
  backgroundColor: string;
}

export const ContactSection = ({ backgroundColor }: ContactSectionProps) => {
  return (
    <FlexColumn
      items={"center"}
      justify={"center"}
      styles={`height: 100vh; background-color: ${backgroundColor}`}
    >
      <WhiteAndGreenText
        firstText={"Get In"}
        secondText={"Touch!"}
        textSize={"32px"}
      />

      <Text text={"Contact Me"} color={colors.white} size={"48px"} />

      <CallToActionButton name={"Contact Form"} href={"/contact"} />

      <Text
        text="or"
        color={colors.greenThemeColor}
        size="24px"
        styles="margin-top: 2rem; margin-bottom: 2rem "
      />

      <Image src={Icons.HexagonIcon} alt={""} />
    </FlexColumn>
  );
};
