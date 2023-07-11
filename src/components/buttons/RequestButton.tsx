import { HTMLAttributes } from "react";
import { RequestButtonWrapper } from "./styled";

interface RequestButtonProps extends HTMLAttributes<HTMLButtonElement> {
  name: string;
  disabled?: boolean;
}

export const RequestButton = ({
  name,
  disabled,
  ...props
}: RequestButtonProps) => {
  return (
    <RequestButtonWrapper type="submit" {...props} disabled={disabled}>
      {name}
    </RequestButtonWrapper>
  );
};
