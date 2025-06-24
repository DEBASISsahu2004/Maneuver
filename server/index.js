require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { contactValidation, handleContactForm } = require('./controllers/contactController');

const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://maneuver-eta.vercel.app/",
  "https://maneuverstudios.com"
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/contactus", contactValidation, handleContactForm);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
