const inquirer = require("inquirer");

const name = async () => {
  const { userInput } = await inquirer.prompt({
    type: "input",
    name: "userInput",
    message: "what is your name?",
  });
  if (!userInput.match(/^[a-zA-Z]+/g)) {
    return "letters only please";
  } else {
    return userInput;
  }
};

const leftOrRight = async (weapons) => {
  const { pathChosen } = await inquirer.prompt({
    type: "list",
    name: "leftOrRight",
    message: "Do you turn left or right?",
    choices: ["left", "right"],
  });
  return pathChosen;
};

module.exports = {
  name,
  leftOrRight,
};
