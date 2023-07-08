import { LinkStyled } from "./styled";
import { colors } from "@/styles/colors";

interface CallToActionButtonProps {
  name: string;
  href: string;
  styles?: string;
  onClick?: any;
}

export const CallToActionButton = ({
  name,
  href,
  styles,
  onClick,
}: CallToActionButtonProps) => {
  return (
    <LinkStyled
      styles={styles}
      href={href}
      style={{
        backgroundColor: `${colors.greenThemeColor}`,
      }}
      onClick={onClick}
    >
      {name}
    </LinkStyled>
  );
};
