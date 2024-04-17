import inquirer from "inquirer";
import { SubscriptionLoggable } from "rxjs/internal/testing/SubscriptionLoggable";
let answers = await inquirer.prompt([
    {message:"enter first number", type:"number", name:"firstnumber"},
    {message:"enter second number", type:"number", name:"secondnumber"},
    {
        message:"select one operator to perform opeation",
        type:"list",
        name:"operator",
        choices:["addition", "subtraction", "division", "multiplication"],
    }
])
if(answers.operator === "addition"){
console.log(answers.firstnumber + answers.secondnumber);
}
else if(answers.operator === "subtraction"){
    console.log(answers.firstnumber - answers.secondnumber);
}
else if(answers.operator === "division"){
    console.log(answers.firstnumber / answers.secondnumber);
}
else if(answers.operator === "multiplication"){
    console.log(answers.firstnumber * answers.secondnumber);
}
else{
    console.log("invalidinput")
}