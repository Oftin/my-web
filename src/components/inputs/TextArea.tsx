import { useState } from "react";
import { TextAreaWrapper } from "./styled";

interface TextAreaProps {
  placeholder: string;
  width: string;
  height: string;
  styles?: string;
}

export const TextArea = ({
  placeholder,
  width,
  height,
  styles,
}: TextAreaProps) => {
  const [text, setText] = useState<string>("");

  console.log("text: ", text);

  const limitWords = 5000;

  return (
    <>
      <TextAreaWrapper
        placeholder={placeholder}
        width={width}
        height={height}
        styles={styles}
        maxLength={limitWords}
        value={text}
        onChange={(e: any) => setText(e.currentTarget.value)}
      />
      {text.length === limitWords && (
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
