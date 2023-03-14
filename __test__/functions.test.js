let { randomMathQuestion, randomDecision } = require("../functions/helper");

describe("randomDecision", () => {
  test("returns a random integer between 1 and 10 inclusive", () => {
    // Call the function
    const result = randomDecision();

    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThanOrEqual(11);
  });
});

describe("randomMathQuestion", () => {
  test("returns a random integer that is the sum of two random integers", () => {
    // Call the function
    const result = randomMathQuestion();

    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThanOrEqual(200);
  });
});
