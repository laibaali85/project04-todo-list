#! /usr/bin/env node 

import inquirer from "inquirer"
import chalk from "chalk";
 console.log(chalk.bold.yellowBright("YOUR TODOS LIST"));
import Choice from "inquirer/lib/objects/choice.js";

let todo_list :string[] = [];
let condition :boolean = true;

while(condition === true){

let option = await inquirer.prompt([
    {
   name:"user_option",
   type:"list",
    message:"WHAT DO YOU WANT TO ADD IN LIST? ",
   choices:["ADD TAST","REMOVE TASK"]
   }
])

if(option.user_option === "ADD TAST"){
let answer = await inquirer.prompt([
    {
       type:"input",
       name:"user_answer",
       message:"Write Something to add in task list",

    }   
])
if(answer.user_answer !== ""){
todo_list.push(answer.user_answer);
console.log(todo_list);
}else{
    console.log("ENTER VALID VALUE");
}
}

else if(option.user_option === "REMOVE TASK"){
let removeChoice = await inquirer.prompt([
    {
        type:"list",
        name:"remove_item",
        message:"Select item to remove",
        choices: todo_list
    }
]);
let index_to_remove = todo_list.indexOf(removeChoice.remove_item);
if(index_to_remove >= 0){
todo_list.splice(index_to_remove,1);
console.log('You Remove :' ,removeChoice.remove_item);
console.log(todo_list);
}
}

let user_answer = await inquirer.prompt([
    {
        type:"confirm",
        name:"user_confirm",
        message:"Do you want to continue",
        default:true
    }
]);
if(user_answer.user_confirm === false){
    condition = false;
}
}
console.log("Thank u for using Todo Lists");
