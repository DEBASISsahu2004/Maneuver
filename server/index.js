require("dotenv").config();
const express = require("express");
const cors = require("cors");
const net = require("net");
const {
  contactValidation,
  handleContactForm,
} = require("./controllers/contactController");

const app = express();
app.use(express.json());

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://maneuver-eta.vercel.app",
    "https://www.maneuverstudios.com",
  ],
  methods: ["GET", "POST"],
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("API is running...");
});

// add route for quick remote check
app.get("/_check-smtp", (req, res) => {
  const host = process.env.EMAIL_HOST || "smtp.privateemail.com";
  const port = parseInt(process.env.EMAIL_PORT, 10) || 587;
  let done = false;
  const socket = net.createConnection({ host, port });

  const timeout = setTimeout(() => {
    if (done) return;
    done = true;
    socket.destroy();
    res.status(504).json({ ok: false, error: "connect timeout" });
  }, 8000);

  socket.on("connect", () => {
    if (done) return;
    done = true;
    clearTimeout(timeout);
    socket.end();
    res.json({ ok: true, host, port });
  });

  socket.on("error", (err) => {
    if (done) return;
    done = true;
    clearTimeout(timeout);
    res.status(502).json({ ok: false, error: err.message });
  });
});

app.post("/contactus", contactValidation, handleContactForm);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
