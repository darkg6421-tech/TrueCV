const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "TrueCV API is running",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

// Placeholder route stubs
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Only start listening when run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`TrueCV backend listening on port ${PORT}`);
  });
}

module.exports = app;