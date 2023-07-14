"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const [disabledInputs, setDisabledInputs] = useState<boolean>(false);
  const [disabledRequestButton, setDisabledRequestButton] =
    useState<boolean>(false);

  const router = useRouter();

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
      setDisabledInputs(true);
      notifyApprove();
      setTimeout(() => {
        router.push("/thanks");
      }, 6000);
    } catch {
      setDisabledInputs(false);
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
            disabled={disabledInputs}
          />

          <Input
            type="email"
            placeholder="Enter your email"
            width="315px"
            height="60px"
            disabled={disabledInputs}
          />
        </Column>

        <TextArea
          placeholder="Enter your message"
          width="650px"
          height="250px"
          disabled={disabledInputs}
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
