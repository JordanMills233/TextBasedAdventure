const { name, leftOrRight } = require("./functions/inq");
let { player } = require("./store/playerStore");

const start = async () => {
  console.log("what is your name?");
  player.name = await name();
};
