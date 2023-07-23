import { PacmanLoader } from "react-spinners";
import { colors } from "@/styles/colors";
import { LoaderWrapper } from "./styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <PacmanLoader color={colors.greenThemeColor} size={50} />
    </LoaderWrapper>
  );
};
