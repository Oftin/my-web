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
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { colors } from "@/styles/colors";
import { sendEmailWithEmailJS } from "@/helpers";
import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 2rem;
`;

const TopInputs = styled.div`
  display: grid;
  grid-template-columns: 315px 315px;
  gap: 20px;
  margin: 1rem;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 250px 250px;
  }
`;

const TextAreaModifier = styled(TextArea)`
  width: 650px;

  @media only screen and (max-width: 700px) {
    width: 520px;
  }
`;

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
      <ContactWrapper>
        <WhiteAndGreenText
          firstText="Get In"
          secondText="Touch!"
          textSize="32px"
        />

        <Text text="Contact Me" color={colors.white} size="48px" />

        <TopInputs>
          <Input
            type="text"
            placeholder="Enter your name"
            height="60px"
            handleChange={(e: React.FormEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
            disabled={disabledInputs}
          />

          <Input
            type="email"
            placeholder="Enter your email"
            height="60px"
            handleChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            disabled={disabledInputs}
          />
        </TopInputs>

        <TextAreaModifier
          placeholder="Enter your message"
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
      </ContactWrapper>
      <Footer backgroundColor={colors.background.ebonyClay} />
    </>
  );
}
