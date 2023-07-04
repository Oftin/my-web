import { TextParagraphWrapper } from "./styled";
import { TextSize } from "./types";

interface TextParagraphProps {
  text: string;
  size?: TextSize;
  styles?: string;
}

export const TextParagraph = ({
  text = "20px",
  size,
  styles,
}: TextParagraphProps) => {
  return (
    <TextParagraphWrapper size={size} styles={styles}>
      {text}
    </TextParagraphWrapper>
  );
};
