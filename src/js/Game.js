import Character from "./Character.js";
import ScoreManager from "./ScoreManager.js";

export default class Game {
  constructor() {
    this.character = new Character(this);
    this.scoreManager = new ScoreManager();
    this.misses = 0;
    this.maxMisses = 5;
    this.init();
  }

  init() {
    this.character.init();
    this.scoreManager.init();
    this.character.getRandomPosition(this.handleHit.bind(this));
    this.initializeMissHandling();
    this.handleHit();
  }

  initializeMissHandling() {
    const cells = document.querySelectorAll(".grid-cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (!cell.contains(document.querySelector("img"))) {
          this.handleHit(false);
        }
      });
    });
  }

  handleHit(hit) {
    if (hit) {
      this.scoreManager.incrementScore();
    } else {
      this.misses += 1;
      if (this.misses >= this.maxMisses) {
        alert("Игра окончена! Ваш счет: " + this.scoreManager.score);
        window.location.reload();
      }
    }
  }
}
