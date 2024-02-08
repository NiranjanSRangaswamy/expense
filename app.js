const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const Router = require("./routers");
const cors = require('cors');
dotenv.config({ path: "./.env" });
const app = express();

const dbURI = process.env.DATABASE;
const port = process.env.PORT;

app.use(cors({origin:'*'}));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(Router);
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port);
    console.log("connected to mongodb and listening at port 5000");
  })
  .catch((err) => console.error(err));
