#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { Message: "Enter First Number", type: "number", name: "firstNumber" },
    { Message: "Enter second Number", type: "number", name: "secondNumber" },
    {
        Message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division"],
    },
]);
// Conditional statement
if (isNaN(answer.firstNumber) || isNaN(answer.secondNumber)) {
    console.log("Please enter valid numbers");
}
else {
    // Perform arithmetic operations
    if (answer.operator === "Addition") {
        console.log(answer.firstNumber + answer.secondNumber);
    }
    else if (answer.operator === "Subtraction") {
        console.log(answer.firstNumber - answer.secondNumber);
    }
    else if (answer.operator === "Multiplication") {
        console.log(answer.firstNumber * answer.secondNumber);
    }
    else if (answer.operator === "Division") {
        if (answer.secondNumber === 0) {
            console.log("Cannot divide by zero");
        }
        else {
            console.log(answer.firstNumber / answer.secondNumber);
        }
    }
    else {
        console.log("Please select a valid operator");
    }
}
