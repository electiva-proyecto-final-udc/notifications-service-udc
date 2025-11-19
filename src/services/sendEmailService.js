const nodemailer = require("nodemailer");
const { render } = require("./templateService");
const { generatePDF } = require("./pdfService");
//const mailRepo = require("../repositories/mailRepository");
require("dotenv").config();

async function sendMail(mailDTO) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const html = render(mailDTO.templateName, mailDTO.templateData);

  const attachments = [];

  if (mailDTO.pdf) {
    const pdf = await generatePDF(mailDTO.templateName, mailDTO.templateData);
    attachments.push({ filename: "documento.pdf", content: pdf });
  }

  const sendResult = await transporter.sendMail({
    from: `"Mail Service" <${process.env.SMTP_USER}>`,
    to: mailDTO.to,
    subject: mailDTO.subject,
    html,
    attachments
  });
  console.log(sendResult);

  return sendResult;
}

module.exports = { sendMail };
