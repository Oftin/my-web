"use client";

import { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { colors } from "@/styles/colors";
import {
  EngineeringDegreeProjectWrapper,
  MainText,
  SecondText,
} from "./styled";

export default function EngineeringDegreeProject() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculationHeightForYouTube = () => {
    if (windowWidth <= 575) {
      return "170";
    }
    if (windowWidth >= 576 && windowWidth <= 767) {
      return "280";
    }
    return "396";
  };

  const calculationWidthForYouTube = () => {
    if (windowWidth <= 575) {
      return "300";
    }
    if (windowWidth >= 576 && windowWidth <= 767) {
      return "500";
    }
    return "700";
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: calculationHeightForYouTube(),
    width: calculationWidthForYouTube(),
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.ebonyClay}>
        <EngineeringDegreeProjectWrapper>
          <MainText>Engineering degree project</MainText>
          <SecondText>Model of a robotic station with control</SecondText>
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
