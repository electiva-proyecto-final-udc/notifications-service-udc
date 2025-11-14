class MailDTO {
  constructor({ to, subject, templateName, templateData, pdf }) {
    this.to = to;
    this.subject = subject;
    this.templateName = templateName;
    this.templateData = templateData;
    this.pdf = pdf || false;
    this.userId = global.decodedUser?.UserData?.ID || null;
    this.role = global.decodedUser?.UserData?.Role || null;
    this.timestamp = new Date();
  }
}

module.exports = MailDTO;
