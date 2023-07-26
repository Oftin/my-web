import { ChangeEventHandler } from "react";
import { TextAreaWrapper } from "./styled";

interface TextAreaProps {
  placeholder: string;
  disabled?: boolean;
  textValue?: string;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export const TextArea = ({
  placeholder,
  textValue,
  handleChange,
  ...props
}: TextAreaProps) => {
  const limitWords = 5000;
  const showLimitWords = textValue?.length === limitWords;

  return (
    <>
      <TextAreaWrapper
        placeholder={placeholder}
        maxLength={limitWords}
        value={textValue}
        onChange={handleChange}
        required
        {...props}
      />
      {showLimitWords && (
        <div
          style={{
            marginTop: "1.5rem",
            border: "1px solid red",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "8px",
          }}
        >
          Maximum word count of
          <span style={{ fontWeight: 700, color: "red" }}> 5000 </span>
          has been reached!
        </div>
      )}
    </>
  );
};
