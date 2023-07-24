import { LinkStyled } from "./styled";
import { colors } from "@/styles/colors";

interface CallToActionButtonProps {
  name: string;
  href: string;
  styles?: string;
}

export const CallToActionButton = ({
  name,
  href,
  styles,
}: CallToActionButtonProps) => {
  return (
    <LinkStyled
      styles={styles}
      href={`${href}` + "#top"}
      style={{
        backgroundColor: `${colors.greenThemeColor}`,
      }}
    >
      {name}
    </LinkStyled>
  );
};
