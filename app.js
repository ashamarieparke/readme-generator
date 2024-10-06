/*
    Author: Ashamarie Parke
    Project Description: Generates information to use for a README.md file on GitHub based on the user's input.


*/
import chalk from 'chalk';
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from 'gradient-string'
import { createSpinner } from "nanospinner";

//create a variable for project name
let projectName;
//create a variable for the project description
let descriptionProject;
//create a variable for programming languages used
let usedLanguages;
//create a variable for the frameworks used
let usedFrameworks;
//create a variable for the databases used
let usedDatabases;
//create a variable for  installations
let installationProject;
//create a variable for link to project
let linkProject;
//create a variable for note to self
let noteToUser;



//helper to resolve animations
//ms = 2000 milliseconds, after 3 seconds, the promise will resolve
const resolveAnimations = (ms =2000) => new Promise((resolve) => setTimeout(resolve, ms));
const spinner = createSpinner('Generating README.file....')

async function welcomeMsg() {
    //welcome message utilizing the chalk animation package
    const intro = chalkAnimation.rainbow(`happy day! this is the README.md Generator, so exciting! \n`);
    await resolveAnimations();
    intro.stop();

    console.log(`
    ${chalk.bgBlueBright('Welcome to the README.md Generator!')}
    This generator will help you create a README.md for your projects on GitHub!
    Following all the directions will help you create an effective ${chalk.bgGreenBright('README.md for GitHub!')}
    You can also add a ${chalk.bgGreenBright('note to self')} about any additional details about your projects!
    Don't worry! You don't have to display the note to selfs on your README.md!\n`);
};

//prompts users about name of the project
async function nameOfProject()
{
    const pName = await inquirer.prompt({
        type: 'input',
        name: 'project_name',
        message: 'What is the name of your project?'
    });
    projectName = pName.project_name;
}

//prompts users about description of project
async function descriptionOfProject()
{
    const projectDescription = await inquirer.prompt({
        type: 'input',
        name: 'project_description',
        message: 'Hmm...How would you describe your project in simpler terms?'
        });
    descriptionProject = projectDescription.project_description
}
//prompts users about programming languages used
async function languagesUsed()
{
    const languages = await inquirer.prompt({
        type: 'checkbox',
        name: 'languages_used',
        message: 'What programming languages did you use in your project?',
        choices: ['JavaScript', 'Python', 'Java', 'C++', 'C#','HTML','CSS','TypeScript','Kotlin','PHP', 'C','Swift', 'None']
        });
    usedLanguages = languages.languages_used
}
//prompts user about what frameworks they used 
async function frameworksUsed()
{
    const frameworks = await inquirer.prompt({
        type: 'checkbox',
        name: 'frameworks_used',
        message: 'What frameworks did you use in your project?',
        choices: ['React', 'Angular', 'Vue', 'Django', 'Flask','jQuery', 'Bootstrap', 'None']
        });
        usedFrameworks = frameworks.frameworks_used

}
//prompts user about what databases they used
async function databasesUsed()
{
    const databases = await inquirer.prompt({
        type: 'checkbox',
        name: 'databases_used',
        message: 'What databases did you use in your project?',
        choices: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'Firebase','None']
        });
        usedDatabases = databases.databases_used
}
//prompts users about project installation
async function projectInstallation()
{
    const installations = await inquirer.prompt({
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
        });
        installationProject = installations.installation
}


//prompts users about the link to their project
async function linkToProject()
{
    const projectLink = await inquirer.prompt({
        type: 'input',
        name: 'project_link',
        message: 'What is the link to your project? (if any)'
        });
        linkProject = projectLink.project_link

}
//prompts users about private details on their project
async function noteToSelf()
{
    const anyNotes = await inquirer.prompt({
        type: 'input',
        name: 'notes',
        message: 'NOTE TO SELF: Is there anything you could have done differently about your project? You could work on this later!'
        });
        noteToUser = anyNotes.notes
    
}
//display info 
async function displayInfo()
{
    
    console.clear()
    spinner.spin(10)
    spinner.clear()
    const aNote = chalkAnimation.rainbow(`Good day! Your note to self:  `);
    await resolveAnimations();
    aNote.stop()
    console.log(noteToUser)
    console.log('\nHere is your info to copy/paste for your README.md file on Github..I hope you like it!')
    //display project name
    console.log(`\n## Project Name`)
    console.log(`\n${projectName}`);
    //display project description
    console.log(`\n## Project Description`)
    console.log(`\n${descriptionProject}`)
    //display programming languages used
    console.log(`\n## Languages Used`)
    console.log(`\n${usedLanguages}`)
    //display frameworks used
    console.log(`\n## Frameworks Used`)
    console.log(`\n${usedFrameworks}`)
    //display databases used
    console.log(`\n## Databases Used`)
    console.log(`\n${usedDatabases}`)
    //display installation 
    console.log(`\n## How to install the Project`)
    console.log(`\n${installationProject}`)
    //display link to project
    console.log(`\n## Link to Project`)
    console.log(`\n${linkProject}`)
    
}

async function main() {
    //invoke functions here
    await welcomeMsg()
    await nameOfProject();
    await descriptionOfProject();
    await languagesUsed();
    await frameworksUsed();
    await databasesUsed();
    await projectInstallation();
    await linkToProject();
    await noteToSelf();
    await displayInfo();

}

main()
