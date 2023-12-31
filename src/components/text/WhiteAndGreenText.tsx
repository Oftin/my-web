import { colors } from "@/styles/colors";
import { Text } from "./Text";
import { TwoWordsTextWrapper } from "./styled";
import { TwoWordsTextProps } from "./types";

export const WhiteAndGreenText = ({
  firstText,
  secondText,
  textSize,
  styles,
}: TwoWordsTextProps) => {
  return (
    <TwoWordsTextWrapper styles={styles}>
      <Text text={firstText} color={colors.white} size={textSize} />
      &nbsp;
      <Text text={secondText} color={colors.greenThemeColor} size={textSize} />
    </TwoWordsTextWrapper>
  );
};
