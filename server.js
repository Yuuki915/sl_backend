require("dotenv").config({ path: "./.env" });
var cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");

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

app.listen(process.env.PORT || 4003, () =>
  console.log(`Server is running at ${process.env.PORT}!`)
);
