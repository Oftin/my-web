import { InputWrapper } from "./styled";

interface InputProps {
  type: "text" | "email";
  placeholder: string;
  width: string;
  height: string;
  styles?: string;
  disabled?: boolean;
}

export const Input = ({
  type,
  placeholder,
  width,
  height,
  styles,
  ...props
}: InputProps) => {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      width={width}
      height={height}
      styles={styles}
      {...props}
    />
  );
};
