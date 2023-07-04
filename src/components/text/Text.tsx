import { TextStyle } from "./styled";
import { TextSize } from "./types";

interface TextProps {
  text: string;
  color: string;
  size: TextSize;
  styles?: string;
}

export const Text = ({ text, color, size, styles }: TextProps) => {
  return (
    <TextStyle color={color} size={size} styles={styles}>
      {text}
    </TextStyle>
  );
};
