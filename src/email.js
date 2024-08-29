import emailjs from "emailjs-com";

const YOUR_SERVICE_ID = "service_9dvfgbh";
const YOUR_TEMPLATE_ID = "template_4lc90yw";
const YOUR_USER_ID = "G4oq1Ldx3K5iqSUp3";

const sendEmail = async (username, phoneNumber, guests) => {
  try {
    const templateParams1 = {
      username,
      phoneNumber,
      guests,
      to_email: "rparonyan00@gmail.com",
    };
    const result1 = await emailjs.send(
      YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID,
      templateParams1,
      YOUR_USER_ID
    );
    console.log(
      "Email sent to rparonyan00@gmail.com successfully:",
      result1.text
    );
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

export default sendEmail;
