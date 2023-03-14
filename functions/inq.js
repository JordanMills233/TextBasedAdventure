const inquirer = require("inquirer");

const { randomDecision, randomMathQuestion } = require("./helper");

const name = async () => {
  const { userInput } = await inquirer.prompt({
    type: "input",
    name: "userInput",
    message: "what is your name?",
  });
  if (!userInput.match(/^[A-Za-z]+$/)) {
    return "use letters only";
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

const climbOrLookAway = async () => {
  const climbOrLook = await inquirer.prompt({
    type: "list",
    name: "climbOrLook",
    message: "do you climb down to the pool or look for a way around the cliff",
    choices: ["climb down to the pool", "look for a way around the cliff"],
  });
  return climbOrLook.climbOrLook;
};

const answerMath = async () => {
  let answer = randomMathQuestion();
  let answerForMath = await inquirer.prompt({
    type: "input",
    name: "answerForMath",
    message:
      "please answer the math question above you have 1 try dont mess this up!",
  });
  if (!answerForMath.answerForMath.match(/^[0-9]*$/)) {
    console.log("TRY AGAIN NUMBERS ONLY");
    [answer, answerForMath.answerForMath] = await answerMath();
  } else {
    return [answer, answerForMath.answerForMath];
  }
  return [answer, answerForMath.answerForMath];
};

const rockPaperScissorsGame = async () => {
  let userChoice = await inquirer.prompt({
    type: "input",
    name: "userChoice",
    message: "Rock Paper Scissors GO...",
  });
  return userChoice.userChoice;
};

module.exports = {
  name,
  leftOrRight,
  investigateSoundOrMove,
  climbOrLookAway,
  answerMath,
  rockPaperScissorsGame,
};
