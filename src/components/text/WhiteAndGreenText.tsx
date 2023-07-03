import { colors } from "@/styles/colors";
import { Text } from "./Text";
import { WhiteAndGreenTextWrapper } from "./styled";
import { TextSize } from "./types";

interface WhiteAndGreenTextProps {
  firstText: string;
  secondText: string;
  textSize: TextSize;
}

export const WhiteAndGreenText = ({
  firstText,
  secondText,
  textSize,
}: WhiteAndGreenTextProps) => {
  return (
    <WhiteAndGreenTextWrapper>
      <Text text={firstText} color={colors.white} size={textSize} />
      &nbsp;
      <Text text={secondText} color={colors.greenThemeColor} size={textSize} />
    </WhiteAndGreenTextWrapper>
  );
};
