import chalk from "chalk";
import figlet from "figlet";

export const randomDecision = () => {
  return Math.floor(Math.random() * 10 + 1);
};

export const randomMathQuestion = () => {
  let int1 = Math.floor(Math.random() * 100 + 1);
  let int2 = Math.floor(Math.random() * 100 + 1);

  console.log(chalk.bgRedBright(` What is ${int1} + ${int2} `));
  return int1 + int2;
};

export const rockPaperScissors = (userChoice) => {
  let options = ["rock", "paper", "scissors"];
  let oppIndex = Math.floor(Math.random() * 3);
  let oppChoice = options[oppIndex];
  console.log(chalk.blueBright(`Opponent chose ${oppChoice}`));

  if (userChoice === oppChoice) {
    console.log(chalk.yellowBright("It's a tie!"));
    return "tie";
  } else if (
    (userChoice === "rock" && oppChoice === "scissors") ||
    (userChoice === "paper" && oppChoice === "rock") ||
    (userChoice === "scissors" && oppChoice === "paper")
  ) {
    console.log(chalk.greenBright("You win!"));
    return "win";
  } else {
    console.log(chalk.redBright("Opponent wins!"));
    return "lose";
  }
};

export const victoryMessage = () => {
  figlet("YOU FOUND THE TREASURE !", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.greenBright(data));
  });
};

export const deathMessage = () => {
  figlet("OOPS YOU DIED !", function (err, data) {
    if (err) {
      console.log("something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.redBright(data));
  });
};
