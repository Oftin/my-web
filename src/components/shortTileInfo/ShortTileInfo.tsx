import Link from "next/link";
import { Text, TextParagraph } from "../text";
import { colors } from "@/styles/colors";
import { scrollUserToTopView } from "@/helpers";
import { ContentWrapper } from "./styled";
import { ShortTileInfoProps } from "./types";

export const ShortTileInfo = ({
  href,
  title,
  shortInfo,
}: ShortTileInfoProps) => {
  return (
    <Link
      href={href}
      style={{
        backgroundColor: `${colors.background.ebonyClay}`,
        width: "20rem",
        height: "fit-content",
        border: "2px solid red",
        borderRadius: "8px",
      }}
      onClick={() => scrollUserToTopView()}
    >
      <ContentWrapper>
        <Text
          text={title}
          color={colors.white}
          size="24px"
          styles="margin-top: 2.5rem"
        />

        <TextParagraph
          text={shortInfo}
          size="16px"
          styles="margin-top: 2.5rem; margin-left: 2.5rem; margin-right: 2.5rem; margin-bottom: 5rem"
        />
      </ContentWrapper>
    </Link>
  );
};
