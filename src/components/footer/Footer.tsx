import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { colors } from "@/styles/colors";
import { Text, WhiteAndGreenText } from "../text";
import { Images } from "../images";
import { FooterWrapper } from "./styled";
import { FooterProps } from "./types";

export const Footer = ({ backgroundColor }: FooterProps) => {
  const [
    disappearLinkedInButtonOnMainPage,
    setDisappearLinkedInButtonOnMainPage,
  ] = useState(
    // window.location.pathname !== "/"
    true
  );

  useEffect(() => {
    setDisappearLinkedInButtonOnMainPage(
      // window.location.pathname !== "/"
      true
    );
  }, []);

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

      {disappearLinkedInButtonOnMainPage && (
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
      )}

      <Text
        text="© 2023 Kamil Bobrowski. All rights reserved."
        color={colors.white}
        size="12px"
        styles="margin-right: 2rem;"
      />
    </FooterWrapper>
  );
};
