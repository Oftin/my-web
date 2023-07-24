"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { Toast } from "@/components/toast";
import { RequestButton } from "@/components/buttons";
import { Footer } from "@/components/footer";
import { Input } from "@/components/inputs";
import { Navbar } from "@/components/navbar";
import { WhiteAndGreenText, Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { sendEmailWithEmailJS } from "@/helpers";
import { ContactWrapper, TopInputs, TextAreaModifier } from "./styled";

export default function Contact() {
  const [typeToast, setTypeToast] = useState<"success" | "fail">("success");
  const [disabledInputs, setDisabledInputs] = useState<boolean>(false);
  const [approvedReCAPTCHA, setApprovedReCAPTCHA] = useState<boolean>(false);
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
      setApprovedReCAPTCHA(true);
    } else {
      setApprovedReCAPTCHA(false);
    }
  };

  useEffect(() => {
    setDisabledRequestButton(
      !name.length || !email.length || !message.length || !approvedReCAPTCHA
    );
  }, [name.length, email.length, message.length, approvedReCAPTCHA]);

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
