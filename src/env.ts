import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  RECAPTCHA_SITE_KEY: str(),
});

export default env;
