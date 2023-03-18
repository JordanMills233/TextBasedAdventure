import {
  name,
  leftOrRight,
  investigateSoundOrIgnore,
  runAwayOrFight,
  climbOrLookAway,
  answerMath,
  rockPaperScissorsGame,
  promptMove,
  chooseOffensive,
  chooseDefensive,
} from "../functions/inq";
import inquirer from "inquirer";

import jest from "jest-mock";
import { log } from "console";

inquirer.prompt = jest.fn();

describe("name function test", () => {
  test("user input with text", async () => {
    expect.assertions(1);
    inquirer.prompt.mockResolvedValue({ userInput: "Joel" });

    await expect(name()).resolves.toEqual("Joel");
  });

  test("user input with 123456 should return error message", async () => {
    expect.assertions(1);
    inquirer.prompt.mockResolvedValue({ userInput: "123456" });

    await expect(name()).resolves.toEqual("use letters only");
  });

  test("user with a symbol in should return error message", async () => {
    expect.assertions(1);
    inquirer.prompt.mockResolvedValue({ userInput: "test!ng" });

    await expect(name()).resolves.toEqual("use letters only");
  });
});

describe("leftOrRight", () => {
  test("should return 'left' when user selects left", async () => {
    inquirer.prompt.mockResolvedValueOnce({ leftOrRight: "left" });
    const result = await leftOrRight();
    expect(result).toBe("left");
  });

  test("should return 'right' when user selects right", async () => {
    inquirer.prompt.mockResolvedValueOnce({ leftOrRight: "right" });
    const result = await leftOrRight();
    expect(result).toBe("right");
  });

  test("should throw an error if inquirer.prompt rejects", async () => {
    inquirer.prompt.mockRejectedValueOnce(new Error("Error message"));
    await expect(leftOrRight()).rejects.toThrow("Error message");
  });
});

describe("investigateSoundOrIgnore", () => {
  test("should return 'Investigate the sound' when user selects Investigate the sound", async () => {
    inquirer.prompt.mockResolvedValueOnce({
      soundOrMove: "Investigate the sound",
    });
    const result = await investigateSoundOrIgnore();
    expect(result).toBe("Investigate the sound");
  });

  test("should return 'Ignore the sound and find another way' when user selects Ignore the sound and find another way", async () => {
    inquirer.prompt.mockResolvedValueOnce({
      soundOrMove: "Ignore the sound and find another way",
    });
    const result = await investigateSoundOrIgnore();
    expect(result).toBe("Ignore the sound and find another way");
  });

  test("should throw an error if inquirer.prompt rejects", async () => {
    inquirer.prompt.mockRejectedValueOnce(new Error("Error message"));
    await expect(investigateSoundOrIgnore()).rejects.toThrow("Error message");
  });
});

describe("runAwayOrFight", () => {
  test("should return 'left' when user selects left", async () => {
    inquirer.prompt.mockResolvedValueOnce({ runOrFight: "Run away" });
    const result = await runAwayOrFight();
    expect(result).toBe("Run away");
  });

  test("should return 'right' when user selects right", async () => {
    inquirer.prompt.mockResolvedValueOnce({ runOrFight: "Fight" });
    const result = await runAwayOrFight();
    expect(result).toBe("Fight");
  });

  test("should throw an error if inquirer.prompt rejects", async () => {
    inquirer.prompt.mockRejectedValueOnce(new Error("Error message"));
    await expect(runAwayOrFight()).rejects.toThrow("Error message");
  });
});

describe("climbOrLookAway", () => {
  test("should return 'left' when user selects left", async () => {
    inquirer.prompt.mockResolvedValueOnce({
      climbOrLook: "climb down to the pool",
    });
    const result = await climbOrLookAway();
    expect(result).toBe("climb down to the pool");
  });

  test("should return 'right' when user selects right", async () => {
    inquirer.prompt.mockResolvedValueOnce({
      climbOrLook: "look for a way around the cliff",
    });
    const result = await climbOrLookAway();
    expect(result).toBe("look for a way around the cliff");
  });

  test("should throw an error if inquirer.prompt rejects", async () => {
    inquirer.prompt.mockRejectedValueOnce(new Error("Error message"));
    await expect(climbOrLookAway()).rejects.toThrow("Error message");
  });
});

describe("answerMath function", () => {
  test("answerMath should return an array with two elements", async () => {
    const mockedAnswer = "8";
    const inquirerPrompt = jest.spyOn(inquirer, "prompt");
    inquirerPrompt.mockResolvedValue({ answerForMath: mockedAnswer });

    const result = await answerMath();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(2);
  });

  test("should prompt the user again if non-numeric input is provided", async () => {
    inquirer.prompt = jest
      .fn()
      .mockResolvedValueOnce({ answerForMath: "not a number" })
      .mockResolvedValueOnce({ answerForMath: "42" });

    const result = await answerMath();
    expect(inquirer.prompt).toHaveBeenCalledTimes(2);
    expect(result).toContain("42");
  });

  test("should return the users input as the answer to the math question", async () => {
    const mockedAnswer = "120";
    const inquirerPrompt = jest.spyOn(inquirer, "prompt");
    inquirerPrompt.mockResolvedValue({ answerForMath: mockedAnswer });

    const result = await answerMath();
    expect(result[1]).toBe("120");
  });

  afterAll(() => {
    const inquirerPrompt = jest.spyOn(inquirer, "prompt");
    inquirerPrompt.mockRestore();
  });
});

describe("rockPaperScissorsGame", () => {
  test("user selects rock", async () => {
    inquirer.prompt.mockResolvedValueOnce({ userChoice: "Rock" });
    const result = await rockPaperScissorsGame();
    expect(result).toBe("Rock");
  });

  test("user selects paper", async () => {
    inquirer.prompt.mockResolvedValueOnce({ userChoice: "Paper" });
    const result = await rockPaperScissorsGame();
    expect(result).toBe("Paper");
  });

  test("user selects scissors", async () => {
    inquirer.prompt.mockResolvedValueOnce({ userChoice: "Scissors" });
    const result = await rockPaperScissorsGame();
    expect(result).toBe("Scissors");
  });
});

describe("promptMove", () => {
  test("Should return an array with length 2", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "attack" });
    const result = await promptMove();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
  });

  test("Should return an array with the first element either 'attack' or 'defend'", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "defend" });
    const result = await promptMove();
    expect(result[0]).toMatch(/^(attack|defend)$/);
  });

  test("Should return an array with the second element being a string", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "attack" });
    const result = await promptMove();
    expect(typeof result[0]).toBe("string");
  });
});

describe("chooseOffensive", () => {
  test("should return 'Throw knife' when user selects Throw knife", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "Throw knife" });
    const result = await chooseOffensive();
    expect(result.move).toBe("Throw knife");
  });

  test("should return 'Swing sword' when user selects Swing sword", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "Swing sword" });
    const result = await chooseOffensive();
    expect(result.move).toBe("Swing sword");
  });

  test("should return 'Slap' when user selects Slap", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "Slap" });
    const result = await chooseOffensive();
    expect(result.move).toBe("Slap");
  });

  test("should return 'Leg sweep' when user selects Leg sweep", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "Leg sweep" });
    const result = await chooseOffensive();
    expect(result.move).toBe("Leg sweep");
  });

  test("should throw an error if inquirer.prompt rejects", async () => {
    inquirer.prompt.mockRejectedValueOnce(new Error("Error message"));
    await expect(chooseOffensive()).rejects.toThrow("Error message");
  });
});

describe("chooseDefensive", () => {
  test("should return 'Dodge roll' when user selects Dodge roll", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "Dodge roll" });
    const result = await chooseDefensive();
    expect(result.move).toBe("Dodge roll");
  });

  test("should return 'Duck' when user selects Duck", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "Duck" });
    const result = await chooseDefensive();
    expect(result.move).toBe("Duck");
  });

  test("should return 'Backflip' when user selects Backflip", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "Backflip" });
    const result = await chooseDefensive();
    expect(result.move).toBe("Backflip");
  });

  test("should return 'Pretend to be dead' when user selects Pretend to be dead", async () => {
    inquirer.prompt.mockResolvedValueOnce({ move: "Pretend to be dead" });
    const result = await chooseDefensive();
    expect(result.move).toBe("Pretend to be dead");
  });

  test("should throw an error if inquirer.prompt rejects", async () => {
    inquirer.prompt.mockRejectedValueOnce(new Error("Error message"));
    await expect(chooseDefensive()).rejects.toThrow("Error message");
  });
});
