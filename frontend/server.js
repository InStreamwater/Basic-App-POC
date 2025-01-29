const express = require("express");
const app = express();
const PORT = 3000;

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date() });
});

// Serve the React app
app.use(express.static("build"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});