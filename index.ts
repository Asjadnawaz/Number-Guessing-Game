import inquirer from "inquirer";

var answer = await inquirer.prompt([{
    message: "Please guess a number",
    name: "Number",
    type: "number"
}])

var randomNumber: number = Math.floor(Math.random() * 10 + 1);

if (answer.Number === randomNumber) {
    console.log("Congratulations! You got the right Number");
} else { console.log("You guess wrong number")}
