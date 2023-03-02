const { name, leftOrRight } = require("./functions/inq");
let { player } = require("./store/playerStore");

const start = async () => {
  console.log("what is your name?");
  player.name = await name();
  userLeftOrRight();
};

const userLeftOrRight = async () => {
  console.log(
    `You are a young adventurer named ${player.name}, who has been hired to explore a mysterious island that no one has ever visited before.
As you make your way through the dense jungle, you come across a fork in the path.
One path leads to the left, and the other leads to the right. Which path do you choose?`
  );
  let chosenPath = await leftOrRight();
  console.log(chosenPath);
};

start();
