import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { useEffect, useState } from "react";
import { Link as ReactScrollLink } from "react-scroll";
import { WhiteAndGreenText } from "../text";
import {
  NavbarPositionFixed,
  NavbarUlWrapper,
  LeftSideLi,
  RightSideLiHorizontal,
  RightSideLiVertical,
  MenuItems,
} from "./styled";
import { ArrowBack } from "../buttons";
import { scrollUserToTopView } from "@/helpers";
import { colors } from "@/styles/colors";
import { NavbarProps } from "./types";

const webTabs = [
  "About",
  "Experience",
  "Skills",
  "Education",
  // "Projects",
  // "Blog",
  "Contact",
].map((e) => e.toLowerCase());

export const Navbar = ({ showArrowBack = true }: NavbarProps) => {
  const [mainScreen, setMainScreen] = useState<boolean>(
    // window.location.pathname === "/"
    false
  );
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState<boolean>(false);

  // useEffect(() => {
  //   setMainScreen(window.location.pathname === "/");
  // }, [mainScreen]);

  const textInsideHamburgerMenu = (text: string) => {
    return (
      <span style={{ color: `${colors.greenThemeColor}` }}>
        .<span style={{ color: `${colors.white}` }}>{text}</span>
        ()
      </span>
    );
  };

  return (
    <>
      <NavbarPositionFixed>
        <NavbarUlWrapper>
          <LeftSideLi>
            {mainScreen ? (
              <ReactScrollLink
                to={"hello"}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setOpenHamburgerMenu(false)}
              >
                <WhiteAndGreenText
                  firstText="Kamil"
                  secondText="Bobrowki"
                  textSize="32px"
                />
              </ReactScrollLink>
            ) : (
              <Link
                href="/"
                onClick={() => {
                  scrollUserToTopView();
                  setOpenHamburgerMenu(false);
                }}
              >
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
              <RightSideLiHorizontal key={tab}>
                {mainScreen ? (
                  <ReactScrollLink
                    to={`${tab}`}
                    spy={true}
                    smooth={true}
                    offset={tab === "skills" ? -200 : undefined}
                    duration={500}
                    onClick={() => setOpenHamburgerMenu(false)}
                  >
                    {`.${tab}()`}
                  </ReactScrollLink>
                ) : (
                  <Link
                    href={`/#${tab}`}
                    onClick={() => {
                      scrollUserToTopView();
                      setOpenHamburgerMenu(false);
                    }}
                  >{`.${tab}()`}</Link>
                )}
              </RightSideLiHorizontal>
            );
          })}

          <RightSideLiVertical>
            <Menu
              right
              width={"100%"}
              isOpen={openHamburgerMenu}
              onOpen={() => setOpenHamburgerMenu(true)}
            >
              {webTabs.map((tab) => {
                return (
                  <MenuItems key={tab}>
                    <Link
                      href={`/#${tab}`}
                      onClick={() => {
                        scrollUserToTopView();
                        setOpenHamburgerMenu(false);
                      }}
                    >
                      {textInsideHamburgerMenu(tab)}
                    </Link>
                  </MenuItems>
                );
              })}
            </Menu>
          </RightSideLiVertical>
        </NavbarUlWrapper>
      </NavbarPositionFixed>
      {showArrowBack && <ArrowBack />}
    </>
  );
};
