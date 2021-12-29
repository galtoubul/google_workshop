import { init } from "emailjs-com";

init("user_MJh57N5VBWTHgTCow2fSV");
const sendEmail = (firstName, lastName, email, message) => {
  e.preventDefault(); // Prevents default refresh by the browser
  emailjs.sendForm(
    `gmail`,
    apiKey.TEMPLATE_ID,
    e.target,
    "user_MJh57N5VBWTHgTCow2fSV"
  );
};
