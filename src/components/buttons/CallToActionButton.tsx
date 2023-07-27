import { useRouter } from "next/navigation";
// import { LinkStyled } from "./styled";
// import { colors } from "@/styles/colors";

interface CallToActionButtonProps {
  name: string;
  href: string;
  styles?: string;
  margin?: string;
}

export const CallToActionButton = ({
  name,
  href,
  styles,
  margin,
}: CallToActionButtonProps) => {
  const router = useRouter();

  console.log(styles, margin);

  return (
    // <LinkStyled
    //   styles={styles}
    //   href={`${href}` + "#top"}
    //   style={{
    //     backgroundColor: `${colors.greenThemeColor}`,
    //   }}
    //   $margin={margin}
    // >
    <button onClick={() => router.push(href)}>{name}</button>
    // </LinkStyled>
  );
};
