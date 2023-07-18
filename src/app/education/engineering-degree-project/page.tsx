"use client";

import YouTube, { YouTubeProps } from "react-youtube";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Text } from "@/components/text";
import { FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";

export default function EngineeringDegreeProject() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "510",
    width: "905",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <Navbar />
      <FlexColumn
        items={"center"}
        justify={"center"}
        styles={`margin-top: 3rem; height: 100vh; background-color: ${colors.background.ebonyClay}`}
      >
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
            boxShadow: "0px 0px 10px 2px rgba(16, 163, 138, 1)",
          }}
        />
      </FlexColumn>
      <Footer />
    </>
  );
}
