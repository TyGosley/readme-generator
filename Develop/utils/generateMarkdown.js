const fs = require("fs");
// ✅ Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "":
      return "";
    default:
      return `![License](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// ✅ Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "":
      return "";
    default:
      break;
  }

    let link = "";

    switch(license) {
      case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
      case "GPLv3":
        link = "https://www.gnu.org/licenses/gpl-3.0";
        break;
      case "Apache 2.0":
        link = "https://opensource.org/licenses/Apache-2.0";
        break;
      default:
        break;
    }
    return link;
  }
    


// ✅ Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "":
      return "";
    default:
      return `
      This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`;
  }
}


// ✅ Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

${data.description}
___

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

___

## Installation

${data.installation}
___

## Usage

${data.usage}
___

## Licenses
${renderLicenseSection(data.license)}

___

## Contributing

${data.contributing}

## Tests

${data.tests}
___

## Questions

Have questions about this project?  Please reach out to me.

| GitHub Username                    | Email          |
| --------                           | -------------- |
| https://github.com/${data.github}  | ${data.email}  |

`;
}


module.exports = generateMarkdown;
