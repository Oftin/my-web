import { PacmanLoader } from "react-spinners";
import { FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";

export const Loader = () => {
  return (
    <FlexColumn
      items={"center"}
      justify={"center"}
      styles="width: 100vw; height: 100vh;"
    >
      <PacmanLoader color={colors.greenThemeColor} size={50} />
    </FlexColumn>
  );
};
