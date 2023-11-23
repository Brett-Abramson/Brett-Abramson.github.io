import nodemailer from "nodemailer";
import { validationResult, body } from "express-validator";
import rateLimit from "express-rate-limit";

const validateContactForm = [
  body("name")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Name is Required"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email address.")
    .normalizeEmail(),
  body("message")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Message is required."),
];
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, //limit each IP to 5 requests per window
  message: "Too many requests from this IP, please try again after 15 minutes",
});
const applyMiddleware = (middleware) => (req, res) =>
  new Promise((resolve, reject) => {
    middleware(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
const applyRateLimit = applyMiddleware(apiLimiter);

export default async (req, res) => {
  const myEmail = process.env.MY_EMAIL;
  const portfolioEmail = process.env.PORTFOLIO_EMAIL;
  const portfolioPassword = process.env.PORTFOLIO_PASSWORD;

  await Promise.all(
    validateContactForm.map((validation) => validation.run(req))
  );
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    if (req.method === "POST") {
      await applyRateLimit(req, res);
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

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email", error);
          return res
            .status(500)
            .json({ message: "Error sending email.", error: error.message });
        } else {
          res.status(200).json({ message: "Email sent! " });
        }
      });
    }
  } catch (exception) {
    // console.log("Exception caught:", JSON.stringify(exception));
    return res.status(500).json({ message: "internal server error." });
  }
};
