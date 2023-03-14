const chalk = require("chalk");

const {
  name,
  leftOrRight,
  investigateSoundOrMove,
  climbOrLookAway,
  answerMath,
  rockPaperScissorsGame,
} = require("./functions/inq");

const {
  randomDecision,
  rockPaperScissors,
  victoryMessage,
} = require("./functions/helper");

let { player } = require("./store/playerStore");

const start = async () => {
  console.log("what is your name?");
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
    userInvestigateSoundOrMove();
  } else if (chosenPath == "right") {
    console.log(`As you walk down the path to the right, you notice that the jungle begins to thin out and the air becomes cooler.
You can hear the sound of rushing water in the distance, and you start to feel hopeful that you might find something interesting.
Suddenly, you come to the edge of a cliff, with a waterfall cascading down into a pool below`);
    userClimbOrLookAway();
  }
};

const userInvestigateSoundOrMove = async () => {
  let result = await investigateSoundOrMove();
  console.log(result);
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

// ROCK PAPER SCISSORS TESTING

// const test = async () => {
//   console.log("Time to play Rock Paper Scissors");
//   let userChoice = await rockPaperScissorsGame();
//   rockPaperScissors(userChoice.toLowerCase());
// };

// test();
