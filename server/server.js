const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://debanjand901:debanjand901@cluster0.vfs4egb.mongodb.net/"
  )
  .then(console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://locathost:5173",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: [
      "Content-type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cors);
app.use(express.json());

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
