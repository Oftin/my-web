"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Position } from "@/components/wrappers/position";
import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import styled from "styled-components";

const ThanksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

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
