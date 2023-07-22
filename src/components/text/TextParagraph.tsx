import { TextParagraphWrapper } from "./styled";
import { TextSize } from "./types";

interface TextParagraphProps {
  text: string;
  size?: TextSize;
  width?: string;
  styles?: string;
}

export const TextParagraph = ({
  text = "20px",
  size,
  width,
  styles,
}: TextParagraphProps) => {
  return (
    <TextParagraphWrapper $size={size} $width={width} $styles={styles}>
      {text}
    </TextParagraphWrapper>
  );
};
