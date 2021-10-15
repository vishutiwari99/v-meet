require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");
const DBConnect = require("./database");
app.use(cookieParser());
app.use(morgan("dev"));
const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));
const PORT = process.env.PORT || 5500;
DBConnect();
app.use(
  express.json({
    limit: "8mb",
  })
);
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
app.use(router);
