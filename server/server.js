import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoute from "./routes/project.route.js";

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

// Routes
app.use("/api/project", projectRoute);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Portfolio Backend Running 🚀",
  });
});

// Render provides PORT automatically
const PORT = process.env.PORT || 8000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});