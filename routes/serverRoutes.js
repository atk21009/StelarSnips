const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");
const Appointment = require("../models/Appointment");
const EmailTemplate = require("../email/EmailTemplate");
const keys = require("../config/keys");
mongoose.model("appointment");

const fs = require("fs");
const logo = base64_encode("./email/logo.png");

module.exports = (app) => {
  app.post("/api/submit", async (req, res) => {
    console.log(req.body);
    const data = {
      firstname: req.body.data.firstname,
      lastname: req.body.data.lastname,
      email: req.body.data.email,
      location: req.body.data.location,
      customers: req.body.data.Customers,
      services: {},
    };
    const nonInclude = [
      "firstname",
      "lastname",
      "email",
      "location",
      "Customers",
    ];
    for (const [key, value] of Object.entries(req.body.data)) {
      if (!nonInclude.includes(key)) {
        data.services[key] = value;
      }
    }

    const appointment = new Appointment({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      location: data.location,
      customers: data.customers,
      services: data.services,
      date: Date.now(),
    });
    appointment.save();

    sgMail.setApiKey(keys.sendgridKey);
    const msg = {
      to: appointment.email,
      from: "taylorja017@gmail.com",
      subject: "Appointment Confirmation",
      html: EmailTemplate(appointment),
      files: [
        {
          filename: "logo",
          contentType: "image/png",
          cid: "logo",
          content: logo,
          disposition: "inline",
        },
      ],
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email Sent");
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

function base64_encode(file) {
  var bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString("base64");
}
