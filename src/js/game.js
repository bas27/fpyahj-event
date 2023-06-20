import Gnome from "./gnome";

export default class Game {
  constructor() {
    this.field = document.getElementById("field");
    this.fieldSize = 4;
    this.fieldArr = [];
    this.startBtn = document.querySelector(".startBtn");
    this.gnome = new Gnome();
    this.caught = document.querySelector(".caught");
    this.missed = document.querySelector(".missed");
  }

  drawField() {
    for (let i = 0; i < Math.pow(this.fieldSize, 2); i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", this.onCellClick.bind(this));
      this.field.appendChild(cell);
      this.fieldArr.push(cell);
    }
    this.startBtn.addEventListener("click", this.start.bind(this));
  }

  start() {
    this.gnome.add(this.fieldArr);
  }

  theEnd() {
    this.caught.textContent = 0;
    this.missed.textContent = 0;
    const gnomeCell = this.fieldArr.find((item) => item.querySelector("img"));
    this.gnome.remove(gnomeCell);
    this.gnome.stop();
  }

  onCellClick(event) {
    event.preventDefault();
    if (!this.fieldArr.some((item) => item.querySelector("img"))) {
      return;
    }

    if (event.currentTarget.querySelector("img")) {
      this.caught.textContent = Number(this.caught.textContent) + 1;
      event.currentTarget.querySelector("img").remove();
      return;
    }

    this.missed.textContent = Number(this.missed.textContent) + 1;
    if (Number(this.missed.textContent) === 5) {
      alert("Game Over");
      this.theEnd();
    }
  }
}
