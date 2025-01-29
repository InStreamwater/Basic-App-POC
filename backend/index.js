const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:3000", "http://localhost:3001"]; // Include all expected frontend origins

const corsOptions = {
  origin: (origin, callback) => {
    console.log("Request Origin:", origin); // Logs the incoming request origin
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("CORS Error: Not allowed by CORS"); // Logs the error
      callback(new Error("Not allowed by CORS"));
    }
  },
};


app.use(cors(corsOptions));

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ItemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model("Item", ItemSchema);

app.get("/health", async (req, res) => {
  const items = "App is up & healthy";
  console.log("Health check status: ",items);
  res.json(items);
});

app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  console.log("Items found: ",items);
  res.json(items);
});

app.post("/api/items", async (req, res) => {
  const newItem = new Item(req.body);
  console.log("Items newItem: ",newItem);
  await newItem.save();
  res.status(201).json(newItem);
});

app.listen(5001, () => console.log("Server running on port 5001"));
