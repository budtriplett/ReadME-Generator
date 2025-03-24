// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
    return `[License](https://opensource.org/licenses/${license})`;
  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
    return `## License
  
  This project is licensed under the ${license} license.`;
  }
  
  // Create a function to generate markdown for README
  function generateMarkdown(response) {
    return `# ${response.title} ${renderLicenseBadge(response.license)}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributors](#contributors)
    - [Tests](#tests)
    - [License](#license)
    - [Features](#features)
  
    ## Description
    ${response.description}
    
    ## Installation
    ${response.installation}
  
    ## Usage
    ${response.usage}
    
    ## Contributors
    ${response.contributors}
  
    ## Tests
    ${response.tests}
    
    ## License
    ${renderLicenseSection(response.license)}
  
    ## Features
    ${response.features}
  
    ## Questions
    If you have any questions, please contact me at ${response.email} or visit my github page at [GitHub](${response.github}).
    `;
  }
  export default generateMarkdown;