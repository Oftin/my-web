import Image from "next/image";
import { colors } from "@/styles/colors";
import { Text, WhiteAndGreenText } from "../text";
import { FlexColumn } from "../wrappers/columns";
import { Icons } from "@/components/icons";

interface FooterProps {
  backgroundColor: string;
}

export const Footer = ({ backgroundColor }: FooterProps) => {
  return (
    <FlexColumn
      items={"center"}
      justify={"center"}
      styles={`background-color: ${backgroundColor}`}
    >
      <FlexColumn
        direction="row"
        items="center"
        justify="space-between"
        styles="marginLeft: 8rem; marginRight: 3.5rem; width: 80%; height: 144px;"
      >
        <div>
          <WhiteAndGreenText
            firstText={"Kamil"}
            secondText={"Bobrowski"}
            textSize={"24px"}
          />
          <Text
            text={"Front-end Developer"}
            color={colors.white}
            size={"16px"}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Image src={Icons.HexagonIcon} alt={""} />
          <Image
            src={Icons.HexagonIcon}
            alt={""}
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          />
          <Image src={Icons.HexagonIcon} alt={""} />
        </div>

        <Text
          text="© 2023 Kamil Bobrowski. All rights reserved."
          color={colors.white}
          size="12px"
        />
      </FlexColumn>
    </FlexColumn>
  );
};
