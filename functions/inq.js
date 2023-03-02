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

const leftOrRight = async () => {
  const pathChosen = await inquirer.prompt({
    type: "list",
    name: "leftOrRight",
    message: "Do you turn left or right?",
    choices: ["left", "right"],
  });
  return pathChosen.leftOrRight;
};

const investigateSoundOrMove = async () => {
  const soundOrMove = await inquirer.prompt({
    type: "list",
    name: "soundOrMove",
    message: "Do you Investigate the sound or Keep moving forward",
    choices: ["Investigate the sound", "Keep moving forward"],
  });
  return soundOrMove.soundOrMove;
};

module.exports = {
  name,
  leftOrRight,
  investigateSoundOrMove,
};
