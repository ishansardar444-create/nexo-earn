const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());

app.use(express.json());
const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
let coins = 0;

app.get("/", (req, res) => {
  res.send("Nexo Earn Backend Running");
});

app.get("/coins", (req, res) => {
  res.json({ coins });
});

app.post("/addcoins", (req, res) => {
  coins += 20;
  res.json({ coins });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Started");
});
