// index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load Routes
const initRoute = require("./routes/init"); // <-- YOUR LINE
app.use("/api/init", initRoute);            // <-- YOUR LINE

// Base route (optional test)
app.get("/", (req, res) => res.send("API is working!"));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log("MongoDB connection error:", error));
