import { colors } from "@/styles/colors";
import { WhiteAndGreenText, Text } from "../text";
import { TitleSectionWrapper } from "./styled";

interface TitleSectionProps {
  upperText: string;
  mainText: string;
  lowerText?: string;
}

export const TitleSection = ({
  upperText,
  mainText,
  lowerText,
}: TitleSectionProps) => {
  const twoColorUpperText = upperText.split(" ");

  const upperTextHaveTwoWords = twoColorUpperText.length > 1;

  return (
    <TitleSectionWrapper>
      {upperTextHaveTwoWords ? (
        <WhiteAndGreenText
          firstText={twoColorUpperText[0]}
          secondText={twoColorUpperText[1]}
          textSize="32px"
        />
      ) : (
        <Text text={twoColorUpperText[0]} color={colors.white} size="32px" />
      )}

      <Text text={mainText} color={colors.greenThemeColor} size="48px" />

      {lowerText && <Text text={lowerText} color={colors.white} size="32px" />}
    </TitleSectionWrapper>
  );
};
