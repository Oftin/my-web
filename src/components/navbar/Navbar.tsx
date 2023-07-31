import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { slide as Menu } from "react-burger-menu";
import { Link as ReactScrollLink } from "react-scroll";
import {
  NavbarPositionFixed,
  NavbarUlWrapper,
  LeftSideLi,
  RightSideLiHorizontal,
  RightSideLiVertical,
  MenuItems,
  MainText,
  Button,
  SpanWrapper,
  SpanInside,
} from "./styled";
import { ArrowBack } from "@/components/buttons";
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
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentPage = usePathname();
  const mainScreen = currentPage === "/";

  const programingTextStyle = (text: string) => {
    return (
      <SpanWrapper>
        .<SpanInside>{text}</SpanInside>
        ()
      </SpanWrapper>
    );
  };

  const turnOnHamburgerMenu = () => {
    return windowWidth <= 992;
  };

  return (
    <>
      <NavbarPositionFixed>
        <NavbarUlWrapper>
          <LeftSideLi>
            {mainScreen ? (
              <ReactScrollLink
                to="hello"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setOpenHamburgerMenu(false)}
              >
                <MainText>
                  <div>Kamil</div>
                  <div>Bobrowki</div>
                </MainText>
              </ReactScrollLink>
            ) : (
              <Button
                onClick={() => {
                  router.push("/");
                }}
              >
                <MainText>
                  <div>Kamil</div>
                  <div>Bobrowki</div>
                </MainText>
              </Button>
            )}
          </LeftSideLi>

          {turnOnHamburgerMenu() ? (
            <RightSideLiVertical>
              <Menu
                right
                width="100%"
                isOpen={openHamburgerMenu}
                onOpen={() => setOpenHamburgerMenu((prevState) => !prevState)}
              >
                {webTabs.map((tab) => {
                  return (
                    <MenuItems key={tab}>
                      {mainScreen ? (
                        <ReactScrollLink
                          href={`/`}
                          to={`${tab}`}
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={() =>
                            setOpenHamburgerMenu((prevState) => !prevState)
                          }
                        >
                          {programingTextStyle(tab)}
                        </ReactScrollLink>
                      ) : (
                        <Link
                          href={`/#${tab}`}
                          onClick={() => {
                            setOpenHamburgerMenu((prevState) => !prevState);
                          }}
                          passHref={true}
                        >
                          {programingTextStyle(tab)}
                        </Link>
                        // <Button
                        //   onClick={() => {
                        //     setOpenHamburgerMenu((prevState) => !prevState);
                        //     router.push(`/#${tab}`);
                        //   }}
                        // >
                        //   {programingTextStyle(tab)}
                        // </Button>
                      )}
                    </MenuItems>
                  );
                })}
              </Menu>
            </RightSideLiVertical>
          ) : (
            <>
              {webTabs.map((tab) => {
                return (
                  <RightSideLiHorizontal key={tab}>
                    {mainScreen ? (
                      <ReactScrollLink
                        to={`${tab}`}
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() =>
                          setOpenHamburgerMenu((prevState) => !prevState)
                        }
                      >
                        {programingTextStyle(tab)}
                      </ReactScrollLink>
                    ) : (
                      <Link
                        href={`/#${tab}`}
                        onClick={() => {
                          setOpenHamburgerMenu((prevState) => !prevState);
                        }}
                        passHref={true}
                      >
                        {programingTextStyle(tab)}
                      </Link>

                      // <Button
                      //   onClick={() => {
                      //     setOpenHamburgerMenu((prevState) => !prevState);
                      //     router.push(`/#${tab}`);
                      //   }}
                      // >
                      //   {programingTextStyle(tab)}
                      // </Button>
                    )}
                  </RightSideLiHorizontal>
                );
              })}
            </>
          )}
        </NavbarUlWrapper>
      </NavbarPositionFixed>
      {showArrowBack && <ArrowBack />}
    </>
  );
};
