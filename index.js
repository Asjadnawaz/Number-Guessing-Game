import inquirer from "inquirer";
import chalk from "chalk";
var answer = await inquirer.prompt([{
        message: "Please guess a number between 1 to 10",
        name: "Number",
        type: "number"
    }]);
var randomNumber = Math.floor(Math.random() * 10 + 1);
if (answer.Number === randomNumber) {
    console.log(chalk.greenBright.bold("Congratulations") + "!" + " " + "You got the right Number");
}
else {
    console.log(chalk.redBright.bold("You guess a wrong number"));
}
