import Game from "../game";

document.body.innerHTML = `
    <div class="game-container">
        <div class="header">
            <button class="startBtn">Начать игру</button>
        </div>
        <div id="field"></div>
    </div>
`;
const result = new Game();
result.drawField();
result.start();

test("create an instance of Game", () => {
  expect(new Game()).toBeInstanceOf(Game);
});

test("drawField method", () => {
  expect(result.fieldArr.length).toBe(16);
});
