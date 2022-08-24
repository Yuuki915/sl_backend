require("dotenv").config({ path: "./.env" });
var cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");

const app = express();
const blogsRoute = require("./routes/blogs");
const userRouter = require("./routes/user");
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json({ limit: "25mb" }));

app.use("/blogs", blogsRoute);
app.use("/user", userRouter);

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("databbase connected!"))
  .catch((err) => console.log(err));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("sl_frontend/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "sl_frontend", "build", "index.html"));
//   });
// }

app.listen(process.env.PORT || 4003, () =>
  console.log(`Server is running at ${process.env.PORT}!`)
);
