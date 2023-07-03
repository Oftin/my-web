import { TextParagraphWrapper } from "./styled";

interface TextParagraphProps {
  text: string;
}

export const TextParagraph = ({ text }: TextParagraphProps) => {
  return <TextParagraphWrapper>{text}</TextParagraphWrapper>;
};
