"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { RequestButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import { Input, TextArea } from "@/components/inputs";
import { Navbar } from "@/components/navbar";
import { WhiteAndGreenText, Text } from "@/components/text";
import { Toast } from "@/components/toast";
import { Column, FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";

export default function Contact() {
  const [typeToast, setTypeToast] = useState<"success" | "fail">("success");
  const [disabledRequestButton, setDisabledRequestButton] =
    useState<boolean>(true);

  const notifyApprove = () => {
    setTypeToast("success");
    toast.success("Message sent!", {
      theme: "dark",
    });
  };

  const notifyFail = () => {
    setTypeToast("fail");
    toast.error("Message not sent, please try again.", {
      theme: "dark",
    });
  };

  const SubmitHandle = () => {
    try {
      notifyApprove();
    } catch {
      notifyFail();
    }
  };

  return (
    <>
      <Navbar />
      <FlexColumn items="center" justify="center" styles="height: 100vh;">
        <WhiteAndGreenText
          firstText="Get In"
          secondText="Touch!"
          textSize="32px"
        />

        <Text text="Contact Me" color={colors.white} size="48px" />

        <Column
          columns={2}
          gap={20}
          styles="margin-top: 45px; margin-bottom: 45px;"
        >
          <Input
            type="text"
            placeholder="Enter your name"
            width="315px"
            height="60px"
          />

          <Input
            type="email"
            placeholder="Enter your email"
            width="315px"
            height="60px"
          />
        </Column>

        <TextArea
          placeholder="Enter your message"
          width="650px"
          height="250px"
        />

        <RequestButton
          name="Send Message"
          onClick={SubmitHandle}
          disabled={disabledRequestButton}
        />
        <Toast toastType={typeToast} />
      </FlexColumn>
      <Footer />
    </>
  );
}
