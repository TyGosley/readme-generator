// ✅ Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


// ✅ Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Please provide your project title',
        validate: projectTitle => {
            if ( projectTitle) {
                return true;
            } else {
                console.log('Please enter an unique title for your project.');
                return false;
            }
        }
    },
    // {
    //     name: 'name',
    //     type: 'input',
    //     message: 'Welcome to the README generator!  To begin, please provide your first and last name:',
    //     validate: nameInput => {
    //         if (nameInput) {
    //             return true;
    //         } else {
    //             console.log('Please enter your name!');
    //             return false;
    //         }
    //     }
    // },
    {
        name: 'github',
        type: 'input',
        message: 'Please enter your Github username:',
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please enter your project description:',
        validate: descripInput => {
            if (descripInput) {
                return true;
            } else {
                console.log("Please enter your description.");
                return false;
            }
        }
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please provide step-by-step instructions for installation:',
        validate: installInput => {
            if ( installInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions.');
                return false;
            }
        }
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please enter instructions for usage:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter instructions for usage.')
                return false;
            }
        }
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please indicate which license you would like to use:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'No License']
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'How can others contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('How can others contribute to this project?');
                return false;
            }
        }
    },
    {
        name: 'tests',
        type: 'input',
        message: "Please provide instructions on how to test your applicaton:",
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please provide instructions on how to test your applicaton.");
                return false;
            }
        }
    },
];

// ✅Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        // create path to folder and make README
        fs.writeFile('./dist/README.md', data, err => {
        // if there is an err, reject promise and send err to catch() method
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true, 
                message: console.log('Success! Your README has been created.  Please navigate to the "dist" folder to find your new README.')
            });
        })
    })
}

// ✅ Create a function to initialize app
function init() {
    return inquirer.prompt(questions); 
}

// ✅ Function call to initialize app
init()
.then(data => {
    const markdown = generateMarkdown(data);
    return writeToFile("README.md", markdown);
})
.then(response => {
    console.log(response.message);
})
.catch(err => {
    console.log(err);
})