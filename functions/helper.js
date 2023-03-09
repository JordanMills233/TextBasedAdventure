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

module.exports = {
  randomDecision,
  randomMathQuestion,
};
