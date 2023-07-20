import { PacmanLoader } from "react-spinners";
import { Position } from "@/components/wrappers/position";
import { colors } from "@/styles/colors";

export const Loader = () => {
  return (
    <Position styles="width: 100vw; height: 100vh;">
      <PacmanLoader color={colors.greenThemeColor} size={50} />
    </Position>
  );
};
