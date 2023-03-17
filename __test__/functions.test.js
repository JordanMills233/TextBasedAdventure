import {
  randomDecision,
  randomMathQuestion,
  rockPaperScissors,
  victoryMessage,
  deathMessage,
} from "../functions/helper.js";

import { jest } from "@jest/globals";
import { log } from "console";

describe("randomDecision", () => {
  test("returns a number between 1 and 10", () => {
    const result = randomDecision();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  test("returns an integer", () => {
    const result = randomDecision();
    expect(result).toBe(Math.floor(result));
  });

  test("returns a different number each time", () => {
    const result1 = randomDecision();
    const result2 = randomDecision();
    expect(result1).not.toBe(result2);
  });
});

describe("randomMathQuestion", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("returns a number", () => {
    const result = randomMathQuestion();
    expect(typeof result).toBe("number");
  });

  test("prints a string to the console", () => {
    randomMathQuestion();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("returns the correct sum of two random integers between 1 and 100", () => {
    const result = randomMathQuestion();
    const regex = /What is (\d+) \+ (\d+)/;
    const match = regex.exec(consoleSpy.mock.calls[0][0]);
    const int1 = parseInt(match[1]);
    const int2 = parseInt(match[2]);
    log(match);
    expect(result).toBe(int1 + int2);
  });
});

describe("rockPaperScissors", () => {
  test('should return "tie" when userChoice is "rock" and opponentChoice is "rock"', () => {
    Math.random = jest.fn().mockReturnValue(0); // Mock Math.random to return 0 which will be 0 floored = 0
    expect(rockPaperScissors("rock")).toBe("tie");
  });

  test('should return "win" when userChoice is "rock" and opponentChoice is "scissors"', () => {
    Math.random = jest.fn().mockReturnValue(0.7); // Mock Math.random to return 0.7 which weill be 2.1 floored = 2
    expect(rockPaperScissors("rock")).toBe("win");
  });

  test('should return "lose" when userChoice is "rock" and opponentChoice is "paper"', () => {
    Math.random = jest.fn().mockReturnValue(0.4); // Mock Math.random to return 0.4 which will be 1.2 floored = 1
    expect(rockPaperScissors("rock")).toBe("lose");
  });
});
