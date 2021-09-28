const fs = require("fs");
const createHTML = require("create-html");
const chalk = require("chalk");

module.exports.generateHTML = function (
  language,
  title,
  cssLink,
  body,
  htmlContainer
) {
  const html = createHTML({
    title: `${title}`,
    head: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
    body: `${body}`,
    css: `${cssLink}`,
    lang: `${language}`,
  });

  fs.writeFile(`${htmlContainer}/${title}.html`, html, (err) => {
    if (err) console.log("Here" + err);
  });

  if (title === "index") {
    console.log(chalk.bold.yellow(`${title}.html is created successfully!`));
  } else {
    console.log(chalk.yellow(`${title}.html is created successfully!`));
  }
};
