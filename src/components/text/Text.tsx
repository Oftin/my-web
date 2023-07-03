import { TextStyle } from "./styled";
import { TextSize } from "./types";

interface TextProps {
  text: string;
  color: string;
  size: TextSize;
}

export const Text = ({ text, color, size }: TextProps) => {
  return (
    <TextStyle color={color} size={size}>
      {text}
    </TextStyle>
  );
};
