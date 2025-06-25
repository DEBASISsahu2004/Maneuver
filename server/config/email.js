const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "mail.privateemail.com",
  port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 465,
  secure: process.env.EMAIL_SECURE === "false" ? false : true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const teamEmails = [
  "sahurocky524@gmail.com",
  "tarun.bisoi29@gmail.com",
  "ashutoshash.az22@gmail.com",
];

const clientHtml = (firstName, lastName, timezone) => `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #222; background: #f9f9f9; padding: 32px; border-radius: 12px; max-width: 600px; margin: auto;">
    <h2 style="color: #1a1a1a; margin-bottom: 16px;">👋 Hey ${firstName} ${lastName},</h2>
    <p style="font-size: 17px; margin-bottom: 18px;">We're not the <span style="font-style: italic; color: #888;">"thanks for reaching out, we'll be back in 2-3 business days"</span> kind of team. We're more like <span style="font-weight: bold; color: #B70404;">"let's build something unforgettable together"</span> type.</p>
    <p style="font-size: 16px; margin-bottom: 10px;">Your message just landed, and we'll reach out within the next <span style="font-weight: bold; color: #B70404;">12-18 hours</span>—with intent, not templates.</p>
    <p style="font-size: 16px; margin-bottom: 18px;">Sit tight. We got you.</p>
    <a href="https://maneuverstudios.com" style="display: inline-block; margin-top: 18px; padding: 10px 22px; background: #B70404; color: #fff; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 16px;">Visit Our Website</a>
    <div style="font-size: 13px; color: #888; margin-top: 32px; text-align: right;">
      <p style="margin: 0;">Maneuver Studios</p>
      <p style="margin: 0;">${
        timezone
          ? new Date().toLocaleString("en-US", { timeZone: timezone })
          : new Date().toLocaleString()
      }</p>
    </div>
  </div>
`;

const teamHtml = (
  firstName,
  lastName,
  email,
  projectType,
  country,
  message
) => `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #222; background: #f9f9f9; padding: 32px; border-radius: 12px; max-width: 600px; margin: auto;">
    <h2 style="color: #1a1a1a; margin-bottom: 12px;">🚀 New Contact Form Submission</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <tr>
        <td style="font-weight: bold; padding: 6px 0; width: 140px;">Name:</td>
        <td style="padding: 6px 0;">${firstName} ${lastName}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 6px 0;">Email:</td>
        <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #B70404; text-decoration: none;">${email}</a></td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 6px 0;">Project Type:</td>
        <td style="padding: 6px 0;">${projectType}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 6px 0;">Country:</td>
        <td style="padding: 6px 0;">${country}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; padding: 6px 0; vertical-align: top;">Message:</td>
        <td style="padding: 6px 0; white-space: pre-line;">${message}</td>
      </tr>
    </table>
    <div style="font-size: 13px; color: #888; margin-top: 24px;">
      <p style="margin: 0;">This message was sent from the <a href="https://maneuverstudios.com" style="color: #B70404; text-decoration: underline;">Maneuver Studios</a> website contact form.</p>
      <p style="margin: 0;">${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })}</p>
    </div>
  </div>
`;

const sendEmail = async (clientEmail, data = {}) => {
  // Send to client
  let clientSubject = "Your Message Just Hit Our Radar";
  let clientHtmlContent = clientHtml(data.firstName, data.lastName, data.timezone);
  const clientMailOptions = {
    from: process.env.EMAIL_USER,
    to: clientEmail,
    subject: clientSubject,
    html: clientHtmlContent,
  };

  // Send to all team members
  let teamSubject = "New Contact Form Submission";
  let teamHtmlContent = teamHtml(
    data.firstName,
    data.lastName,
    data.email,
    data.projectType,
    data.country,
    data.message
  );

  try {
    // Send to client
    await transporter.sendMail(clientMailOptions);
    // Send to all team members in parallel for speed
    await Promise.all(
      teamEmails.map((teamEmail) =>
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: teamEmail,
          subject: teamSubject,
          html: teamHtmlContent,
        })
      )
    );
    console.log("All emails sent successfully");
  } catch (error) {
    console.log("Error sending email:", error);
    throw error;
  }
};

module.exports = { sendEmail };
