import { LinkStyled } from "./styled";
import { colors } from "@/styles/colors";

interface CallToActionButtonProps {
  name: string;
  href: string;
}

export const CallToActionButton = ({ name, href }: CallToActionButtonProps) => {
  return (
    <LinkStyled
      href={href}
      style={{
        backgroundColor: `${colors.greenThemeColor}`,
      }}
    >
      {name}
    </LinkStyled>
  );
};
