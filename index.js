const start = async () => {
  console.log("What name?");
  player.name = await name();
  console.log("Hello", player.name);
};
