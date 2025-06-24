const { validationResult, check } = require("express-validator");
const { sendEmail } = require("../config/email");

// Validation middleware
const contactValidation = [
  check("firstName").notEmpty().withMessage("First name is required"),
  check("email").isEmail().withMessage("Valid email is required"),
  check("projectType").notEmpty().withMessage("Project type is required"),
  check("country").notEmpty().withMessage("Country is required"),
  check("message").notEmpty().withMessage("Message is required"),
];

// Controller
const handleContactForm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Get timezone from request body (if present)
  const { firstName, lastName, email, projectType, country, message, timezone } = req.body;

  try {
    // Send email to your team
    await sendEmail(process.env.EMAIL_USER, "team", {
      firstName,
      lastName,
      email,
      projectType,
      country,
      message,
      timezone
    });

    // Send email to client
    await sendEmail(email, "client", { firstName, lastName, timezone });
    res.json({ message: "Form submitted and emails sent successfully." });
  } catch (err) {
    console.error("Email sending error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
};

module.exports = { contactValidation, handleContactForm };
