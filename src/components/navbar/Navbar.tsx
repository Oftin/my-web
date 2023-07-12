import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as ReactScrollLink } from "react-scroll";
import { WhiteAndGreenText } from "../text";
import { Nav, Ul, LeftSideLi, RightSideLi } from "./styled";
import { ArrowBack } from "../buttons";
import { scrollUserToTopView } from "@/helpers";

const webTabs = [
  "About",
  "Experience",
  "Skills",
  "Education",
  // "Projects",
  // "Blog",
  "Contact",
].map((e) => e.toLowerCase());

interface NavbarProps {
  showArrowBack?: boolean;
}

export const Navbar = ({ showArrowBack = true }: NavbarProps) => {
  const [mainScreen, setMainScreen] = useState<boolean>(
    window.location.pathname === "/"
  );

  useEffect(() => {
    setMainScreen(window.location.pathname === "/");
  }, [mainScreen]);

  return (
    <>
      <Nav>
        <Ul>
          <LeftSideLi>
            {mainScreen ? (
              <ReactScrollLink
                to={"hello"}
                spy={true}
                smooth={true}
                duration={500}
              >
                <WhiteAndGreenText
                  firstText="Kamil"
                  secondText="Bobrowki"
                  textSize="32px"
                />
              </ReactScrollLink>
            ) : (
              <Link href="/" onClick={() => scrollUserToTopView()}>
                <WhiteAndGreenText
                  firstText="Kamil"
                  secondText="Bobrowki"
                  textSize="32px"
                />
              </Link>
            )}
          </LeftSideLi>

          {webTabs.map((tab) => {
            return (
              <>
                {mainScreen ? (
                  <ReactScrollLink
                    to={`${tab}`}
                    spy={true}
                    smooth={true}
                    offset={tab === "skills" ? -200 : undefined}
                    duration={500}
                  >
                    <RightSideLi>{`.${tab}()`}</RightSideLi>
                  </ReactScrollLink>
                ) : (
                  <RightSideLi key={tab}>
                    <Link href={`/#${tab}`}>{`.${tab}()`}</Link>
                  </RightSideLi>
                )}
              </>
            );
          })}
        </Ul>
      </Nav>
      {showArrowBack && <ArrowBack />}
    </>
  );
};
