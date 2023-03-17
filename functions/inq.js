import inquirer from "inquirer";

import { randomMathQuestion } from "./helper.js";

export const name = async () => {
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

export const leftOrRight = async () => {
  const pathChosen = await inquirer.prompt({
    type: "list",
    name: "leftOrRight",
    message: "Do you turn left or right?",
    choices: ["left", "right"],
  });
  return pathChosen.leftOrRight;
};

export const investigateSoundOrIgnore = async () => {
  const soundOrMove = await inquirer.prompt({
    type: "list",
    name: "soundOrMove",
    message:
      "Do you Investigate the sound or Ignore the sound and find another way",
    choices: ["Investigate the sound", "Ignore the sound and find another way"],
  });
  return soundOrMove.soundOrMove;
};

export const runAwayOrFight = async () => {
  const runOrFight = await inquirer.prompt({
    type: "list",
    name: "runOrFight",
    message: "do you run away or fight the wild animal?",
    choices: ["Run away", "Fight"],
  });
  return runOrFight.runOrFight;
};

export const climbOrLookAway = async () => {
  const climbOrLook = await inquirer.prompt({
    type: "list",
    name: "climbOrLook",
    message: "do you climb down to the pool or look for a way around the cliff",
    choices: ["climb down to the pool", "look for a way around the cliff"],
  });
  return climbOrLook.climbOrLook;
};

export const answerMath = async () => {
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

export const rockPaperScissorsGame = async () => {
  let userChoice = await inquirer.prompt({
    type: "list",
    name: "userChoice",
    message: "Rock Paper Scissors GO...",
    choices: ["Rock", "Paper", "Scissors"],
  });
  return userChoice.userChoice;
};

export const promptMove = async () => {
  let choice = await inquirer.prompt({
    type: "list",
    name: "move",
    message: "Choose a move:",
    choices: ["attack", "defend"],
  });
  return [
    choice.move,
    choice.move == "defend" ? await chooseDefensive() : await chooseOffensive(),
  ];
};

export const chooseOffensive = async () => {
  return await inquirer.prompt({
    type: "list",
    name: "move",
    message: "Pick your offensive move",
    choices: ["Swing sword", "Throw knife", "Leg sweep", "Slap"],
  });
};

export const chooseDefensive = async () => {
  return await inquirer.prompt({
    type: "list",
    name: "move",
    message: "Pick your offensive move",
    choices: ["Dodge roll", "Duck", "Backflip", "Pretend to be dead"],
  });
};
