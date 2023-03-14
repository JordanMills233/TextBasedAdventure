const chalk = require("chalk");

// needs tests
const randomDecision = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const randomMathQuestion = () => {
  let int1 = Math.floor(Math.random() * 100 + 1);
  let int2 = Math.floor(Math.random() * 100 + 1);

  console.log(chalk.bgRedBright(` What is ${int1} + ${int2} `));
  return int1 + int2;
};

const rockPaperScissors = (userChoice) => {
  let options = ["rock", "paper", "scissors"];
  let oppChoice = options[Math.floor(Math.random() * 3)];

  if (userChoice === oppChoice) {
    console.log(chalk.yellowBright("It's a tie!"));
  } else if (
    (userChoice === "rock" && oppChoice === "scissors") ||
    (userChoice === "paper" && oppChoice === "rock") ||
    (userChoice === "scissors" && oppChoice === "paper")
  ) {
    console.log(chalk.greenBright("You win!"));
  } else {
    console.log(chalk.redBright("Opponent wins!"));
  }
};

const victoryMessage = () => {
  var figlet = require("figlet");

  figlet("YOU FOUND THE TREASURE", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.greenBright(data));
  });
};

module.exports = {
  randomDecision,
  randomMathQuestion,
  rockPaperScissors,
  victoryMessage,
};
