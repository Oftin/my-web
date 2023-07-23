"use client";

import YouTube, { YouTubeProps } from "react-youtube";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import styled from "styled-components";

const EngineeringDegreeProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

export default function EngineeringDegreeProject() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "340",
    width: "600",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.ebonyClay}>
        <EngineeringDegreeProjectWrapper>
          <Text
            text={"Engineering degree project"}
            color={colors.white}
            size={"48px"}
            styles="margin-bottom: 1rem;"
          />
          <Text
            text={"Model of a robotic station with control"}
            color={colors.greenThemeColor}
            size={"24px"}
            styles="margin-bottom: 4rem;"
          />
          <YouTube
            videoId="V4SdvO030xA"
            opts={opts}
            onReady={onPlayerReady}
            style={{
              boxShadow: `0px 0px 10px 2px ${colors.greenThemeColor}`,
            }}
          />
        </EngineeringDegreeProjectWrapper>
      </PagePosition>
      <Footer />
    </>
  );
}
