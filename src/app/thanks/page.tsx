"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { ThanksWrapper } from "./styled";

export default function Thanks() {
  return (
    <>
      <Navbar showArrowBack={false} />
      <ThanksWrapper>
        <Text text={"Thanks"} color={colors.white} size={"48px"} />
        <Text text={"for"} color={colors.greenThemeColor} size={"36px"} />
        <Text text={"Message!"} color={colors.white} size={"48px"} />
      </ThanksWrapper>
      <Footer backgroundColor={colors.background.ebonyClay} />
    </>
  );
}
