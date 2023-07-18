"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { RequestButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import { Input, TextArea } from "@/components/inputs";
import { Navbar } from "@/components/navbar";
import { WhiteAndGreenText, Text } from "@/components/text";
import { Toast } from "@/components/toast";
import { Column, FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";
import { sendEmailWithEmailJS } from "@/helpers";

export default function Contact() {
  const [typeToast, setTypeToast] = useState<"success" | "fail">("success");
  const [disabledInputs, setDisabledInputs] = useState<boolean>(false);
  const [disabledRequestButton, setDisabledRequestButton] =
    useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

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
      sendEmailWithEmailJS({ name, email, message });
      notifyApprove();
      setTimeout(() => {
        router.push("/thanks");
      }, 6000);
    } catch {
      setDisabledInputs(false);
      notifyFail();
    }
  };

  const onChangeReCAPTCHA = (token: string | null): void | undefined => {
    if (token) {
      setDisabledRequestButton(false);
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
          styles="margin-top: 1.5rem; margin-bottom: 1.5rem;"
        >
          <Input
            type="text"
            placeholder="Enter your name"
            width="315px"
            height="60px"
            handleChange={(e: React.FormEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
            disabled={disabledInputs}
          />

          <Input
            type="email"
            placeholder="Enter your email"
            width="315px"
            height="60px"
            handleChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            disabled={disabledInputs}
          />
        </Column>

        <TextArea
          placeholder="Enter your message"
          width="650px"
          height="250px"
          textValue={message}
          handleChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
            setMessage(e.currentTarget.value)
          }
          disabled={disabledInputs}
        />

        <ReCAPTCHA
          sitekey={process.env.RECAPTCHA_SITE_KEY!}
          onChange={onChangeReCAPTCHA}
          theme="dark"
          style={{
            marginTop: "1.5rem",
            borderRadius: "20px",
          }}
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
