import { HTMLAttributes } from "react";
import { RequestButtonWrapper } from "./styled";

interface RequestButtonProps extends HTMLAttributes<HTMLButtonElement> {
  name: string;
}

export const RequestButton = ({ name, ...props }: RequestButtonProps) => {
  return (
    <RequestButtonWrapper type="submit" {...props}>
      {name}
    </RequestButtonWrapper>
  );
};
