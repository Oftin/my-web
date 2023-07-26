import { ChangeEventHandler } from "react";
import { InputWrapper } from "./styled";

interface InputProps {
  type: "text" | "email";
  placeholder: string;
  disabled?: boolean;
  handleChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input = ({
  type,
  placeholder,
  handleChange,
  ...props
}: InputProps) => {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      required
      onChange={handleChange}
      {...props}
    />
  );
};
