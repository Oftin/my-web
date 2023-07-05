import { colors } from "@/styles/colors";
import { Text } from "./Text";
import { TwoWordsTextWrapper } from "./styled";
import { TwoWordsTextProps } from "./types";

export const GreenAndWhiteText = ({
  firstText,
  secondText,
  textSize,
  styles,
}: TwoWordsTextProps) => {
  return (
    <TwoWordsTextWrapper styles={styles}>
      <Text text={firstText} color={colors.greenThemeColor} size={textSize} />
      &nbsp;
      <Text text={secondText} color={colors.white} size={textSize} />
    </TwoWordsTextWrapper>
  );
};
