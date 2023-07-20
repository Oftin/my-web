"use client";

import { PagePosition } from "@/components/wrappers/pagePosition";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Text } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { colors } from "@/styles/colors";

export default function MasterDegreeProject() {
  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.ebonyClay}>
        <Position styles={"margin-top: 3rem; padding: 5em 0; height: 100%"}>
          <Text
            text={"Master degree project"}
            color={colors.white}
            size={"48px"}
            styles="margin-bottom: 1rem;"
          />
          <Text
            text={"Mobile platform for security constrol in rooms"}
            color={colors.greenThemeColor}
            size={"24px"}
            styles="margin-bottom: 4rem;"
          />
          <Position styles="width: 80vw;">
            <Position alignItems={"start"} styles="width: 100%;">
              <Text
                text={"Abstract"}
                color={colors.greenThemeColor}
                size={"24px"}
              />
            </Position>
            <Text
              text={
                "The aim of the work was to design, manufacture, and program a mobile platform for security control in rooms. Autodesk Inventor computer software environment was used to carry out the task. The supporting elements of the entire structure were made of PLA, using 3D printing technology. The motion system was implemented on an Arduino Uno board. Data collection from the environment and visualization of the obtained information were performed on a Raspberry Pi 3B+ computer platform."
              }
              color={colors.white}
              size={"20px"}
              styles="margin-bottom: 4rem;"
            />

            <Position alignItems={"start"} styles="width: 100%;">
              <Text
                text={"Introduction"}
                color={colors.greenThemeColor}
                size={"24px"}
              />
            </Position>
            <Text
              text={
                "Mobile platforms make it possible to work from a safe distance for human life and health while performing hazardous activities. Among them are inspections of the premises of buildings with possible biological contamination that are in danger of collapse."
              }
              color={colors.white}
              size={"20px"}
              styles="margin-bottom: 1rem;"
            />
            <Text
              text={
                "The performance of complex tasks by a mobile platform is made possible by mounted equipment designed to collect information from the environment and transmit it to a control device, and an operator remote from the area being surveyed can make adjustments to the task at hand. The most common equipment mounted on mobile platforms are distance sensors and vision system cameras. The configuration of the mobile platform equipment is determined by the specifics of the task being performed."
              }
              color={colors.white}
              size={"20px"}
              styles="margin-bottom: 1rem;"
            />
            <Text
              text={
                "The design process of the mobile platform was preceded by a review of commercial solutions, in order to prepare as universal a design as possible."
              }
              color={colors.white}
              size={"20px"}
              styles="margin-bottom: 4rem;"
            />

            <Position alignItems={"start"} styles="width: 100%;">
              <Text
                text={"Design process"}
                color={colors.greenThemeColor}
                size={"24px"}
              />
            </Position>
            <Text
              text={
                "The following design assumptions were made during the development of the mobile concept:"
              }
              color={colors.white}
              size={"20px"}
            />
            <Position alignItems="start" styles="width: 100%;">
              <Text
                text={
                  "a) stability of the platform on a level, sloping and sandy surface,"
                }
                color={colors.white}
                size={"20px"}
              />
              <Text
                text={"b) the ability to climb and overcome various obstacles,"}
                color={colors.white}
                size={"20px"}
              />
              <Text
                text={
                  "c) stability of movement and as even pressure on the ground as possible."
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 2rem;"
              />
            </Position>

            <Position>
              <Text
                text={
                  "A computer-aided design system was used to design the mobile platform Autodesk Inventor. The design (Fig.1) has a central body and six legs. The high stability of the movement is a result of the number of legs, which allows to achieve a even pressure on the ground at six distant points (at least three legs are always in contact with the ground)."
                }
                color={colors.white}
                size={"20px"}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  width: "80vw",
                  alignItems: "center",
                  justifyItems: "center",
                  margin: "2rem 0",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "pink",
                    }}
                  />
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "yellow",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "green",
                  }}
                />
              </div>
              <Text
                text={
                  "Fig. 1. Mobile platform layout: a) isometric view, b) minimum structure height, c) maximum leg spacing"
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 2rem;"
              />
              <Text
                text={
                  "The designed components were created using incremental manufacturing technology (so-called 3D printing). This technology makes it possible to produce complex parts of irregular shape in a relatively short time, which would be very difficult or even impossible to achieve using other technologies. Prior to the printing process, the files of the designed parts were imported into one of the popular programs designed for 3D printing, Ultimaker Cura."
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 4rem;"
              />
              <Position alignItems={"start"} styles="width: 100%;">
                <Text
                  text={"Control system"}
                  color={colors.greenThemeColor}
                  size={"24px"}
                />
              </Position>
              <Text
                text={
                  "An Arduino Uno and a Raspberry Pi 3B+ were used to control the design, which allowed the system's tasks to be split between two boards and eased the task of software development. A servo controller with I2C communication was also used, which allows parallel control of multiple motors. In addition, it allowed reducing the amount of wiring inside the mobile platform. A POS-100-5-C power supply was used as the main power supply, which provides electricity to 18 servos. A portable battery, known as a powerbank, was used to power the logic, camera and sensors, which was placed inside the mobile platform."
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 2rem;"
              />
              <Text
                text={
                  "Figure 2 shows the arrangement of servos in one of the legs of the platform mobile platform. Lifting of the leg is made possible by the horizontal arrangement of two motors. The motor located in the leg responsible for moving the mobile platform is positioned vertically against the body."
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 2rem;"
              />
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "yellow",
                }}
              />
              <Text
                text={"Fig. 2. View of servo system in a single leg"}
                color={colors.white}
                size={"20px"}
                styles="margin: 2rem 0;"
              />
              <Text
                text={
                  "Fig. 3 shows a ready-to-run model of the mobile platform with the with the installed electronics."
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 2rem;"
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 1fr",
                  gap: "10px",
                  width: "80vw",
                  alignItems: "center",
                  justifyItems: "center",
                  marginBottom: "2rem 0",
                }}
              >
                <div
                  style={{
                    width: "300px",
                    height: "100px",
                    backgroundColor: "pink",
                  }}
                />
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "yellow",
                  }}
                />
              </div>
              <Text
                text={
                  "Fig. 3 a). View of the ready-to-use mobile platform, b) arrangement of elements on the website"
                }
                color={colors.white}
                size={"20px"}
                styles="margin: 2rem 0;"
              />
              <Text
                text={
                  "The mobile platform is controlled using a dedicated website (Fig. 3b), displayed on the screen of a mobile device such as a smartphone or tablet. The The website displays real-time information in the form of camera images and data from the sensors, including a graphical display (three circles in different colors) of the air condition air and the risk of explosion. The green color indicates a safe zone, yellow indicates a possible danger, and red color indicates a dangerous zone with a high concentration of flammable gas flammable."
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 2rem;"
              />
              <Text
                text={
                  "The website was designed using the React.js library, which is an extension of the JavaScript programming language. The appearance of the site is responsible for the Cascading Style Sheet (CSS), which is responsible for the layout, as well as the colors of the of the displayed elements. The hypertext markup language, which is responsible for describing the structure of the information contained on the website is responsible for the hypertext markup language (HTML)."
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 2rem;"
              />
              <Text
                text={
                  "The motion sequences were written in C++ and were uploaded to the memory of the Arduino Uno board. The triggering of a particular action is done on the screen, where the action is then transferred via the Raspberry Pi 3B+ and UART communication to the Arduino Uno board and from there to the servo controller."
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 4rem;"
              />
              <Position alignItems={"start"} styles="width: 100%;">
                <Text
                  text={"Summary"}
                  color={colors.greenThemeColor}
                  size={"24px"}
                />
              </Position>
              <Text
                text={
                  "The aim of the study was to develop a mobile platform for remote security control in the premises. It was decided to go for a stable structure that has a total of six points of support, with a minimum of three points at all times when walking. The entire was designed in a CAD environment, using Autodesk Inventor. At the design stage design, it was necessary to take into account the numerous aspects for which the mobile platform must be prepared for during target operation."
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 2rem;"
              />
              <Text
                text={
                  "The mobile platform was made using 3D printing technology. All supporting elements were made from PLA filament, which is lightweight and safe for the user during the printing process and does not emit gases that irritate the respiratory tract."
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 2rem;"
              />
              <Text
                text={
                  "The system was split into two different microcontrollers. This made it possible to speed up the the process of programming and compiling the entire system, along with the division of responsibilities of of specific modules. The programmed modules responsible for the motion system were uploaded to the memory of the Arduino Uno board, and the modules responsible for communication wireless communication and collecting information from the environment were installed on a platform Raspberry Pi 3B+ computer platform"
                }
                color={colors.white}
                size={"20px"}
                styles="margin-bottom: 2rem;"
              />
              <Text
                text={
                  "An intuitive-to-use interface for operating the platform from mobile devices such as smartphones and tablets has also been designed."
                }
                color={colors.white}
                size={"20px"}
              />
            </Position>
          </Position>
        </Position>
      </PagePosition>
      <Footer />
    </>
  );
}
