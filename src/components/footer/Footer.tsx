import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { colors } from "@/styles/colors";
import { Text, WhiteAndGreenText } from "../text";
import { Position } from "@/components/wrappers/position";
import { Images } from "../images";

interface FooterProps {
  backgroundColor?: string;
}

export const Footer = ({ backgroundColor }: FooterProps) => {
  const [
    disappearLinkedInButtonOnMainPage,
    setDisappearLinkedInButtonOnMainPage,
  ] = useState(
    // window.location.pathname !== "/"
    false
  );

  useEffect(() => {
    setDisappearLinkedInButtonOnMainPage(
      // window.location.pathname !== "/"
      false
    );
  }, []);

  return (
    <Position styles={`background-color: ${backgroundColor};`}>
      <Position
        flexDirection="row"
        justifyContent="space-between"
        styles="marginLeft: 8rem; marginRight: 3.5rem; width: 80%; height: 144px;"
      >
        <div>
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
              width={200}
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
          styles="margin-right: -4rem;"
        />
      </Position>
    </Position>
  );
};
