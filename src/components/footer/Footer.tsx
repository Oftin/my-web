import Image from "next/image";
import Link from "next/link";
import { colors } from "@/styles/colors";
import { Text, WhiteAndGreenText } from "@/components/text";
import { Images } from "@/components/images";
import { FooterWrapper } from "./styled";
import { FooterProps } from "./types";

export const Footer = ({ backgroundColor }: FooterProps) => {
  return (
    <FooterWrapper $backgroundColor={backgroundColor}>
      <div
        style={{
          marginLeft: "2rem",
        }}
      >
        <WhiteAndGreenText
          firstText="Kamil"
          secondText="Bobrowski"
          textSize="24px"
        />
        <Text text="Front-end Developer" color={colors.white} size="16px" />
      </div>

      <Link
        href={"https://www.linkedin.com/in/kamil-bobrowski-a8a276193/"}
        target="_blank"
      >
        <Image
          src={Images.LinkedIn}
          alt=""
          width={150}
          style={{
            borderRadius: "8px",
          }}
        />
      </Link>

      <Text
        text="© 2023 Kamil Bobrowski. All rights reserved."
        color={colors.white}
        size="12px"
        styles="margin-right: 2rem;"
      />
    </FooterWrapper>
  );
};
