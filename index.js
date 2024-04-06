#! /usr/bin/env node
import inquirer from "inquirer";
let todo = ["namaz", "roza", "fdfdf", "bbcb"];
let check = true;
let exit = true;
while (exit) {
    let todoOptions = await inquirer.prompt([
        {
            name: "optionList",
            type: "list",
            message: "please select the following option",
            choices: ["Read", "Add", "Delete", "Update", "Exit"]
        }
    ]);
    if (todoOptions.optionList === "Add") {
        check = true;
        while (check) {
            let todoquestion = await inquirer.prompt([
                {
                    name: "Q1",
                    type: "input",
                    message: "what would you like to add inyour to do list",
                },
                {
                    name: "Q2",
                    type: "confirm",
                    message: "Would you like to add more in your todo list",
                    default: "true",
                },
            ]);
            todo.push(todoquestion.Q1);
            console.log(todo);
            check = todoquestion.Q2;
        }
    }
    else if (todoOptions.optionList === "Read") {
        console.log(todo);
    }
    else if (todoOptions.optionList === "Update") {
        console.log("current Todo list:", todo);
        let indexCheck = await inquirer.prompt([
            {
                name: "Q3",
                type: "number",
                message: "Enter the index of the todo you want to update:",
            },
        ]);
        if (indexCheck.Q3 > todo.length - 1)
            console.log("invalid index");
        else {
            let indexValue = await inquirer.prompt([
                {
                    name: "Q4",
                    type: "string",
                    message: "Enter your new todo:",
                },
            ]);
            todo[indexCheck.Q3] = indexValue.Q4;
            console.log("updated Todo list:", todo);
        }
    }
    else if (todoOptions.optionList === "Delete") {
        console.log("current Todo list:", todo);
        let indexCheck = await inquirer.prompt([
            {
                name: "Q3",
                type: "number",
                message: "Enter the index of the todo you want to delete:",
            },
        ]);
        if (indexCheck.Q3 > todo.length - 1)
            console.log("invalid index");
        else {
            let delItem = todo.splice(indexCheck.Q3, 1);
            console.log(delItem, "Todo deleted successfully!");
            console.log("updated Todo list:", todo);
        }
    }
    else if (todoOptions.optionList === "Exit") {
        let exitquestion = await inquirer.prompt([
            {
                name: "Q5",
                type: "confirm",
                message: "Do you want to continue",
                default: "true",
            },
        ]);
        exit = exitquestion.Q5;
    }
}
