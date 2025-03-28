import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import { RateLimiterMemory } from "rate-limiter-flexible";

interface Props {
  name: string;
  email: string;
  message: string;
  property: string;
}

const rateLimiter = new RateLimiterMemory({
  points: 2,
  duration: 60,
});

const sanitizeInput = (input: string) => {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  let ip = req.headers["x-real-ip"] || req.socket.remoteAddress || "default";
  if (Array.isArray(ip)) {
    ip = ip[0];
  }

  try {
    await rateLimiter.consume(ip);
  } catch {
    return res
      .status(429)
      .json({ error: "Too many requests, please try again later." });
  }

  const secretCode = req.headers["api-email-code"];

  if (secretCode !== process.env.NEXT_PUBLIC_API_EMAIL_SECRET_CODE) {
    return res.status(403).json({ error: "Forbidden" });
  }

  let { name, email, message, property } = req.body;

  name = sanitizeInput(name);
  email = sanitizeInput(email);
  property = sanitizeInput(property);
  message = sanitizeInput(message);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SEND_FROM_EMAIL,
    to: process.env.SEND_TO_EMAIL,
    subject: "Luna Blue - Website Contact Form",
    replyTo: email,
    text: message,
    html: EmailTemplate({ name, email, message, property }),
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

const EmailTemplate = ({ name, email, message, property }: Props) => {
  return `<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Luna Blue</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0;">
    <table style="width: 100%; background-color: #B56953;">
      <tr>
        <td>
          <h1 style="padding: 1rem;">Luna Blue</h1>
        </td>
      </tr>
    </table>

    <table style="width: 100%; padding: 1rem;">
      <tr>
        <td>
          <h3 style="font-size: 1.25rem">Website form submission</h3>
          <p style="font-size: 1rem; margin-top: 1rem; font-weight: 500;">
            Name: <span style="font-weight: 200; font-style: italic;">${name}</span>
          </p>
          <p style="font-size: 1rem; font-weight: 500;">
            Email address: <span style="font-weight: 200; font-style: italic;">${email}</span>
          </p>
          <p style="font-size: 1rem; font-weight: 500;">
            Property: <span style="font-weight: 200; font-style: italic;">${property}</span>
          </p>
          <p style="font-size: 1rem; font-weight: 500;">
            Message:
            <br />
            <span style="font-weight: 200; font-style: italic;">${message}</span>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
