"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FlexColumn } from "@/components/wrappers/columns";
import { Text } from "@/components/text";
import { colors } from "@/styles/colors";

export default function Thanks() {
  return (
    <>
      <Navbar showArrowBack={false} />
      <FlexColumn items={"center"} justify={"center"} styles="height: 100vh;">
        <Text text={"Thanks"} color={colors.white} size={"48px"} />
        <Text text={"for"} color={colors.greenThemeColor} size={"36px"} />
        <Text text={"Message!"} color={colors.white} size={"48px"} />
      </FlexColumn>
      <Footer />
    </>
  );
}
