#! /usr/bin/env node
//Importing inquirer and chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colourfull Wellcome message
console.log(chalk.bold.cyanBright("\n \t\t Code With Ariba Abbasi - Word Counter"));
console.log("=".repeat(60));

// Prompt the user to enter a Sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence abcd",
    }
]);

// Trimming the sentence and splitting it into words based on "spaces"
let words = answer.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("n".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));