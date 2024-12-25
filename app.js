//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get("/maxigallery", (req, res) => {
  res.sendFile(__dirname + "/Gallery.html");
});
app.get("/maxipartners", (req, res) => {
  res.sendFile(__dirname + "/partners.html");
});
app.get("/mypurpose", (req, res) => {
  res.sendFile(__dirname + "/purpose.html");
});
app.get("/partnerdetails", (req, res) => {
  res.sendFile(__dirname + "/pdetails.html");
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/about.html'));
}); 
app.post("/", (req, res) => {
  const address = req.body.emailadd;
  const f_name = req.body.firstname;
  const l_name = req.body.lastname;
  const place = req.body.place;
  const mailOptions = {
    from: address,
    to: process.env.EMAIL_USER,
    subject: `From Site by: ${address}`,
    text: `<h2> ${address} : ${l_name} ${f_name} has subscribed to the newsletter from ${place} </h2>`,
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
      return res.json({ success: false, error: error.message });
    }
    res.json({ success: true, message: "Subscribed" });
  });
});

app.listen( process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});