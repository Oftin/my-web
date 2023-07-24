import emailjs from "@emailjs/browser";

interface sendEmailProps {
  name: string;
  email: string;
  message?: string;
  newPageIdea?: string;
}

export const sendEmailWithEmailJS = async ({
  name,
  email,
  message,
  newPageIdea,
}: sendEmailProps) => {
  const serviceID = process.env.EMAILJS_SERVIDE_ID!;
  const templateID = message
    ? process.env.EMAILJS_TEMPLATE_ID_CONTACT!
    : process.env.EMAILJS_TEMPLATE_ID_IDEA!;
  const publicKEY = process.env.EMAILJS_PUBLIC_KEY!;

  const templateParams = {
    name: name,
    email: email,
    message: message || "",
    newPageIdea: newPageIdea || "",
  };

  await emailjs.send(serviceID, templateID, templateParams, publicKEY).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (err) => {
      console.log("FAILED...", err);
    }
  );
};
