// needs tests
const randomDecision = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const randomMathQuestion = () => {
  let int1 = Math.floor(Math.random() * 100 + 1);
  let int2 = Math.floor(Math.random() * 100 + 1);

  console.log(`What is ${int1} + ${int2}`);
  return int1 + int2;
};

const rockPaperScissors = (userChoice) => {
  let options = ["rock", "paper", "scissors"];
  let oppChoice = options[Math.floor(Math.random() * 3)];

  if (userChoice === oppChoice) {
    console.log("It's a tie!");
  } else if (
    (userChoice === "rock" && oppChoice === "scissors") ||
    (userChoice === "paper" && oppChoice === "rock") ||
    (userChoice === "scissors" && oppChoice === "paper")
  ) {
    console.log("You win!");
  } else {
    console.log("Opponent wins!");
  }
};

module.exports = {
  randomDecision,
  randomMathQuestion,
  rockPaperScissors,
};
