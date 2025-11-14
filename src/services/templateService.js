const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

function render(templateName, data) {
  const templatePath = path.join(__dirname, `../templates/${templateName}.hbs`);
  const html = fs.readFileSync(templatePath, "utf8");

  const compiled = handlebars.compile(html);
  return compiled(data);
}

module.exports = { render };
