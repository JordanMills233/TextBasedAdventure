import ca from "chalk-animation";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const glitchWelcome = ca.glitch("please");

  await sleep();
  glitchWelcome.stop();
}

welcome();
