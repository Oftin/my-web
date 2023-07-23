import { ChangeEventHandler } from "react";
import { InputWrapper } from "./styled";

interface InputProps {
  type: "text" | "email";
  placeholder: string;
  width?: string;
  height: string;
  styles?: string;
  disabled?: boolean;
  handleChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input = ({
  type,
  placeholder,
  width,
  height,
  styles,
  handleChange,
  ...props
}: InputProps) => {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      width={width}
      height={height}
      styles={styles}
      required
      onChange={handleChange}
      {...props}
    />
  );
};
