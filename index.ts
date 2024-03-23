#!/usr/bin/env node

import inquirer from "inquirer";
console.log("\n\tWellcome To \ `code with princess taha\` - CLI simple calculator\n");

let answers = await inquirer.prompt([
    {message:"Enter first Number",type:"number",name:"firstNumber"},
    {message: "Enter Second Number",type:"number",name:"secondNumber"},
    {
        message: "select one operator to perform operation",
        type:"list",
        name: "operator",
        choices:["Addition","Substraction","Multiplication","Division",],
     }
]);
if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers. secondNumber)
}
else if(answers.operator === "Substraction"){
    console.log(answers. firstNumber - answers. secondNumber)
}
else if(answers.operator ==="Multiplication"){
console.log(answers.firstNumber * answers. secondNumber)
}
else if (answers.operator ==="Division"){
    console.log(answers.firstNumber / answers. secondNumber)
}
else{
    console.log("Invalid Input")
}