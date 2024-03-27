export default class ScoreManager {
  constructor() {
    this.score = 0;
    this.scoreElement = document.createElement("div");
  }

  init() {
    this.scoreElement.textContent = "Очки: 0";
    document.body.appendChild(this.scoreElement);
  }

  incrementScore() {
    this.score += 1;
    this.scoreElement.textContent = "Очки: " + this.score;
  }
}
