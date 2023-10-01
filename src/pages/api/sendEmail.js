import nodemailer from "nodemailer";

export default async (req, res) => {
  const myEmail = process.env.MY_EMAIL;
  const portfolioEmail = process.env.PORTFOLIO_EMAIL;
  const portfolioPassword = process.env.PORTFOLIO_PASSWORD;

  if (req.method === "POST") {
    const { name, email, message } = req.body;

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
      text: message,
    };

    // send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "error sending email." });
      } else {
        res.status(200).json({ message: "Email sent! " });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
