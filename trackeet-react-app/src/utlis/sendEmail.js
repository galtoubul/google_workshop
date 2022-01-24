import emailjs, { init } from "emailjs-com";

const SERVICE_ID = "user_MJh57N5VBWTHgTCow2fSV";
const TEMPLATE_ID = "template_doktnrk";

init(SERVICE_ID);

export const sendEmail = async ({ firstName, lastName, email, message }) => {
  return emailjs
    .send("service_khiqfqu", TEMPLATE_ID, {
      firstName,
      lastName,
      message,
      email,
      from_name: "trackeet contact us form",
    })
    .then(() => true)
    .catch(() => false);
};
