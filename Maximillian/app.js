//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  const address = req.body.emailadd;
  const text = req.body.place;
  const f_name = req.body.firstname;
  const l_name = req.body.lastname;
  const mailOptions = {
    from: address,
    to: process.env.EMAIL_USER,
    subject: `From Portfolio by: ${address}`,
    text: `${address} : ${text} ${l_name} ${f_name}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
      return res.status(500).sendFile(__dirname + "/failure.html");
    }
    else{
    console.log("Message sent: %s", info.messageId);
    // res.redirect("/?emailSent=true");
    res.sendFile(__dirname + "/success.html") ;
    }

  });
});

app.listen( process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});