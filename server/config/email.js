const nodemailer = require("nodemailer");
const https = require("https");
require("dotenv").config();

const parseBool = (v) => {
  if (typeof v === "boolean") return v;
  if (v == null) return false;
  return String(v).toLowerCase() === "true";
};

const EMAIL_HOST = process.env.EMAIL_HOST || "smtp.privateemail.com";
const EMAIL_PORT = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : 465;
const EMAIL_SECURE = parseBool(process.env.EMAIL_SECURE); // true for 465, false for 587

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_SECURE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  socketTimeout: 10000,
  logger: false,
  debug: process.env.NODE_ENV !== "production",
  tls: {
    // allow override via env for debugging only
    rejectUnauthorized: parseBool(process.env.EMAIL_TLS_REJECT_UNAUTHORIZED) !== false,
  },
});

// Verify SMTP connection at startup and log any errors so logs show the real cause
transporter.verify()
  .then(() => console.log("[email] SMTP connected", { host: EMAIL_HOST, port: EMAIL_PORT, secure: EMAIL_SECURE }))
  .catch((err) => console.error("[email] SMTP verify failed:", err && err.message ? err.message : err));

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
      <p style="margin: 0;">${new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      })}</p>
    </div>
  </div>
`;

const sendEmail = async (data = {}) => {
  // helper: send via SendGrid HTTP API if API key is present
  const sendWithSendGrid = async (to, subject, html) => {
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) throw new Error("SendGrid API key not configured");

    const payload = JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: process.env.EMAIL_USER },
      subject,
      content: [{ type: "text/html", value: html }],
    });

    const options = {
      hostname: "api.sendgrid.com",
      port: 443,
      path: "/v3/mail/send",
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload),
      },
    };

    await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) return resolve();
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => reject(new Error(`SendGrid error ${res.statusCode}: ${body}`)));
      });
      req.on("error", (e) => reject(e));
      req.write(payload);
      req.end();
    });
  };

  // Send to client
  const clientSubject = "Your Message Just Hit Our Radar";
  const clientHtmlContent = clientHtml(data.firstName, data.lastName, data.timezone);
  const clientMailOptions = {
    from: `Maneuver Studios <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: clientSubject,
    html: clientHtmlContent,
  };

  try {
    // try SMTP first
    await transporter.sendMail(clientMailOptions);
  } catch (err) {
    console.error("[email] SMTP send to client failed:", err && err.message ? err.message : err);
    // fallback to SendGrid if available
    if (process.env.SENDGRID_API_KEY) {
      try {
        await sendWithSendGrid(data.email, clientSubject, clientHtmlContent);
        console.log("[email] fallback: sent client email via SendGrid");
      } catch (sgErr) {
        console.error("[email] SendGrid fallback failed:", sgErr && sgErr.message ? sgErr.message : sgErr);
        throw new Error("Failed to send confirmation email to client: " + (err.message || err));
      }
    } else {
      throw new Error("Failed to send confirmation email to client: " + (err.message || err));
    }
  }

  // Send to all team members in parallel
  const teamSubject = "New Contact Form Submission";
  const teamHtmlContent = teamHtml(
    data.firstName,
    data.lastName,
    data.email,
    data.projectType,
    data.country,
    data.message
  );

  // attempt SMTP for team, otherwise fallback to SendGrid per recipient
  const results = await Promise.allSettled(
    teamEmails.map(async (teamEmail) => {
      try {
        return await transporter.sendMail({
          from: `Maneuver Studios <${process.env.EMAIL_USER}>`,
          to: teamEmail,
          subject: teamSubject,
          html: teamHtmlContent,
        });
      } catch (teamErr) {
        console.error(`[email] SMTP send to ${teamEmail} failed:`, teamErr && teamErr.message ? teamErr.message : teamErr);
        if (process.env.SENDGRID_API_KEY) {
          try {
            await sendWithSendGrid(teamEmail, teamSubject, teamHtmlContent);
            console.log(`[email] fallback: sent team email to ${teamEmail} via SendGrid`);
            return { fallback: true };
          } catch (sgErr) {
            console.error(`[email] SendGrid fallback to ${teamEmail} failed:`, sgErr && sgErr.message ? sgErr.message : sgErr);
            throw teamErr;
          }
        }
        throw teamErr;
      }
    })
  );

  return results;
};

module.exports = { sendEmail };
