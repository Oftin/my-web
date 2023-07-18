/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  env: {
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    EMAILJS_SERVIDE_ID: process.env.EMAILJS_SERVIDE_ID,
    EMAILJS_TEMPLATE_ID_CONTACT: process.env.EMAILJS_TEMPLATE_ID_CONTACT,
    EMAILJS_TEMPLATE_ID_IDEA: process.env.EMAILJS_TEMPLATE_ID_IDEA,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
