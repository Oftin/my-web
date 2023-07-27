import { useRouter } from "next/navigation";
import { Button } from "./styled";

interface CallToActionButtonProps {
  name?: string;
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

  return (
    <Button
      styles={styles}
      onClick={() => {
        router.push(href);
      }}
      $margin={margin}
    >
      {name}
    </Button>
  );
};
