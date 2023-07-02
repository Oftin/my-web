import { colors } from "@/styles/colors";
import { ColorText } from "./ColorText";
import { WhiteAndGreenTextWrapper } from "./styled";

interface WhiteAndGreenTextProps {
  firstText: string;
  secondText: string;
}

export const WhiteAndGreenText = ({
  firstText,
  secondText,
}: WhiteAndGreenTextProps) => {
  return (
    <WhiteAndGreenTextWrapper>
      <ColorText text={firstText} color={colors.white} />
      &nbsp;
      <ColorText text={secondText} color={colors.greenThemeColor} />
    </WhiteAndGreenTextWrapper>
  );
};
