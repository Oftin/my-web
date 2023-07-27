import { useRouter } from "next/navigation";
import { Text, TextParagraph } from "@/components/text";
import { colors } from "@/styles/colors";
import { ContentWrapper, Button } from "./styled";
import { ShortTileInfoProps } from "./types";

export const ShortTileInfo = ({
  href,
  title,
  shortInfo,
}: ShortTileInfoProps) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push(href);
      }}
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
    </Button>
  );
};
