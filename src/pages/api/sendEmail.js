import nodemailer from "nodemailer";
// import { validationResult, body } from "express-validator";
// import rateLimit from "express-rate-limit";


export default async (req, res) => {
  const myEmail = process.env.MY_EMAIL;
  const portfolioEmail = process.env.PORTFOLIO_EMAIL;
  const portfolioPassword = process.env.PORTFOLIO_PASSWORD;

  try {
    if (req.method === "POST") {

      const { name, email, message } = req.body;
      const websiteURL = "https://brett-abramson.vercel.app/";
      const messageWithFooter = `${message}\n\nThis message was sent from ${websiteURL}`;
      // A Transporter using my email service credentials
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: portfolioEmail,
          pass: portfolioPassword,
        },
      });

      // set up email data
      const mailOptions = {
        from: email,
        to: myEmail,
        subject: `New Contact from ${name}`,
        text: messageWithFooter,
      };

      // send email
      const sendMailPromise = new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });
      // transporter.sendMail(mailOptions, (error, info) => {
      //   if (error) {
      //     console.error("Error sending email", error);
      //     return res
      //       .status(500)
      //       .json({ message: "Error sending email.", error: error.message });
      //   } else {
      //     res.status(200).json({ message: "Email sent! " });
      //   }
      // });

      await sendMailPromise

      res.status(200).json({message: "Email sent!"})
    } else {
      res.status(405).json({ message: "Method not allowed"})
    }
  } catch (exception) {
    console.error("Exception caught:", exception);
    return res.status(500).json({ message: "internal server error.", error: exception.message });
  }
};
