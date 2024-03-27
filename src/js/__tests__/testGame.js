import Game from "../Game";

test("Should check if a variable is undefined", () => {
  const gamesNew = new Game();
  expect(gamesNew).toBeDefined();
});
