import { colors } from "@/styles/colors";
import { Text } from "./Text";
import { WhiteAndGreenTextWrapper } from "./styled";
import { TextSize } from "./types";

interface WhiteAndGreenTextProps {
  firstText: string;
  secondText: string;
  textSize: TextSize;
  styles?: string;
}

export const WhiteAndGreenText = ({
  firstText,
  secondText,
  textSize,
  styles,
}: WhiteAndGreenTextProps) => {
  return (
    <WhiteAndGreenTextWrapper styles={styles}>
      <Text text={firstText} color={colors.white} size={textSize} />
      &nbsp;
      <Text text={secondText} color={colors.greenThemeColor} size={textSize} />
    </WhiteAndGreenTextWrapper>
  );
};
