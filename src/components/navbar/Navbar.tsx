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
  NameAndSurnameText,
  Button,
  SpanWrapper,
  SpanInside,
} from "./styled";

const webTabs = [
  "About",
  "Experience",
  "Skills",
  "Education",
  // "Projects",
  // "Blog",
  "Contact",
].map((e) => e.toLowerCase());

export const Navbar = () => {
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
              <NameAndSurnameText>
                <div>Kamil</div>
                <div>Bobrowski</div>
              </NameAndSurnameText>
            </ReactScrollLink>
          ) : (
            <Button
              onClick={() => {
                router.push("/");
              }}
            >
              <NameAndSurnameText>
                <div>Kamil</div>
                <div>Bobrowski</div>
              </NameAndSurnameText>
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
                      <Button
                        onClick={() => {
                          setOpenHamburgerMenu((prevState) => !prevState);
                          window.location.href = `https://www.kamil-bobrowski.com/#${tab}`;
                        }}
                      >
                        {programingTextStyle(tab)}
                      </Button>
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
                    <Button
                      onClick={() => {
                        setOpenHamburgerMenu((prevState) => !prevState);
                        window.location.href = `https://www.kamil-bobrowski.com/#${tab}`;
                      }}
                    >
                      {programingTextStyle(tab)}
                    </Button>
                  )}
                </RightSideLiHorizontal>
              );
            })}
          </>
        )}
      </NavbarUlWrapper>
    </NavbarPositionFixed>
  );
};
