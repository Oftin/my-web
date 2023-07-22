import { TextStyle } from "./styled";
import { TextSize } from "./types";

interface TextProps {
  text: string;
  color: string;
  size: TextSize;
  centerText?: boolean;
  styles?: string;
}

export const Text = ({ text, color, size, centerText, styles }: TextProps) => {
  return (
    <TextStyle
      $color={color}
      $size={size}
      $centerText={centerText}
      $styles={styles}
    >
      {text}
    </TextStyle>
  );
};
