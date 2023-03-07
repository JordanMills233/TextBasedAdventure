let { name } = require("../functions/inq");

const inquirer = require("inquirer");
jest.mock("inquirer");

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
