import chalk from "chalk";

import {
  name,
  leftOrRight,
  investigateSoundOrIgnore,
  climbOrLookAway,
  answerMath,
  runAwayOrFight,
  rockPaperScissorsGame,
  promptMove,
} from "./functions/inq.js";

import {
  deathMessage,
  randomDecision,
  rockPaperScissors,
  decreaseHP,
  victoryMessage,
} from "./functions/helper.js";

import { player } from "./store/playerStore.js";

const start = async () => {
  while (player.name == "use letters only" || player.name == "") {
    console.log(player.name);
    player.name = await name();
  }
  userLeftOrRight();
};

const userLeftOrRight = async () => {
  console.log(
    `You are a young adventurer named ${player.name}, who has been hired to explore a mysterious island that no one has ever visited before.
As you make your way through the dense jungle, you come across a fork in the path.
One path leads to the left, and the other leads to the right. Which path do you choose?`
  );
  let chosenPath = await leftOrRight();
  if (chosenPath == "left") {
    console.log(
      `As you walk down the path to the left, you notice that the jungle becomes more dense and overgrown. You have to push your way through thick vines and branches,
and you begin to feel as though you're being watched. Suddenly, you hear a rustling in the bushes ahead of you.`
    );
    userInvestigateSoundOrIgnore();
  } else if (chosenPath == "right") {
    console.log(`As you walk down the path to the right, you notice that the jungle begins to thin out and the air becomes cooler.
You can hear the sound of rushing water in the distance, and you start to feel hopeful that you might find something interesting.
Suddenly, you come to the edge of a cliff, with a waterfall cascading down into a pool below`);
    userClimbOrLookAway();
  }
};

const userInvestigateSoundOrIgnore = async () => {
  let result = await investigateSoundOrIgnore();
  if (result == "Ignore the sound and find another way") {
    console.log(
      "as you get far enough away from the jungle you come across a strange looking old man he challenges you to a game of Rock Paper Scissors which if you Win you will amass fortunes and if you loose you will die a gruesome death"
    );
    userRockPaperScissors();
  } else if (result == "Investigate the sound") {
    console.log(
      "You move cautiously toward the sound, and as you get closer, you see a pair of glowing eyes staring back at you from the darkness. A low growl rumbles from the bushes, and you realize that you've stumbled upon a large, wild animal"
    );
    UserRunAwayOrFight();
  }
};

const UserRunAwayOrFight = async () => {
  let result = await runAwayOrFight();
  if (result == "Run away") {
    console.log(`as you get far enough away from the jungle you come across a strange looking old man he challenges you to a game of Rock Paper Scissors which 
if you Win you will amass fortunes and if you loose you will die a gruesome death`);
    userRockPaperScissors();
  } else if (result == "Fight") {
    tigerFight();
  }
};

const tigerFight = async () => {
  let tigerHP = 10;
  while (tigerHP > 0 && player.health > 0) {
    let result = await promptMove();
    if (result[0] == "attack") {
      if (randomDecision() > 4) {
        console.log(result[1].move + " was succesful Tiger loses 2 HP");
        tigerHP -= 2;
        console.log(chalk.greenBright(`HP REMAINING: ${player.health}`));
        console.log(chalk.redBright(`TIGER HP REMAINING: ${tigerHP}`));
      } else {
        console.log(result[1].move + " failed you lose 2 HP");
        decreaseHP(2);
        console.log(chalk.greenBright(`HP REMAINING: ${player.health}`));
        console.log(chalk.redBright(`TIGER HP REMAINING: ${tigerHP}`));
      }
    } else if (result[0] == "defend") {
      if (randomDecision() > 3) {
        console.log(result[1].move + " was succesful you dont lose any HP");
        console.log(chalk.greenBright(`HP REMAINING: ${player.health}`));
        console.log(chalk.redBright(`TIGER HP REMAINING: ${tigerHP}`));
      } else {
        console.log(result[1].move + " failed you lose 2 HP");
        decreaseHP(2);
        console.log(chalk.greenBright(`HP REMAINING: ${player.health}`));
        console.log(chalk.redBright(`TIGER HP REMAINING: ${tigerHP}`));
      }
    }
  }
  if (tigerHP == 0) {
    console.log(`After your tough fought victory you spend some time calming your nerves before moving forward after only a short walk through the forest you stumble upon a
a cave opening, you explore to the centre of the cave and you find ancient ruins holding a shiny artefact that looks like it would sell for a lot`);
    victoryMessage();
  } else {
    deathMessage();
  }
};

const userRockPaperScissors = async () => {
  console.log("Time to play rock paper scissors");
  let userChoice = await rockPaperScissorsGame();
  let result = rockPaperScissors(userChoice.toLowerCase());
  while (result == "tie") {
    result = await userRockPaperScissors();
  }
  if (result == "win") {
    console.log(`the old man congratulates you on your win and as promised he leads you to a cave opening, 
you explore to the centre and you find ancient ruins holding a shiny artefact that looks like it would sell for a lot`);
    victoryMessage();
  } else {
    console.log(`Oh no you lost you notice a rather unsettling look on the old mans face. You quickly retreat from the area, 
keeping a wary eye on the bushes as you back away. After a few minutes, you reach a clearing and take a moment to catch your breath. 
As you are catching your breathe you are suddenly pounced on by a tiger and are made into a mid afternoon snack`);
    deathMessage();
  }
  return result;
};

const userClimbOrLookAway = async () => {
  let result = await climbOrLookAway();
  if (result == "climb down to the pool") {
    let dieOrLive = randomDecision();
    if (dieOrLive > 7) {
      console.log(`as you navigate deeper into the jungle you see a cave opening, you explore to the centre and you find ancient ruins hold a shiny artefact 
that looks like it would sell for a lot`);
      return 0;
    }
    console.log(chalk.redBright("OOPS YOU DIED"));
  } else if (result == "look for a way around the cliff") {
    console.log(`You search around the edge of the cliff, looking for a way to get past the waterfall without climbing down. After a few minutes of searching,
you find a rather large gap but you are sure if you get the right amount of speed you can jump it!`);
    let answer = await answerMath();
    if (answer[0] == answer[1]) {
      victoryMessage();
      console.log(`You take a run up and thanks to your math expertise you clear the gap with ease you look up and notice a narrow path that leads behind the waterfall.
you see a cave opening, you explore to the centre and you find ancient ruins hold a shiny artefact that looks like it would sell for a lot`);
    } else {
      console.log(
        `You really should of paid attention during math class. you take a run up and drastically underestimate the size of the gap and fall 500ft to your death`
      );
      console.log(chalk.redBright("OOPS YOU DIED"));
    }
  }
};

start();
