const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor(data, content) {
    super();
    console.log(data, content);
    this.sgApi = sendgrid(keys.sendgridKey);
    this.from_email = new helper.Email("taylorja017@gmail.com");
    this.subject = "Appointment reminder";
    this.body = new helper.Content("text/html", content);
    this.recipient = this.formatAddress(data.email);

    this.addRecipient();
  }

  formatAddress(recipient) {
    return new helper.Email(recipient);
  }

  addRecipient() {
    const personalize = new helper.Personalization();
    personalize.addTo(this.recipient);
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON(),
    });
    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
