import goblinImage from "../img/goblin.png";

export default class Character {
  constructor(game) {
    this.game = game;
  }

  init() {
    const container = document.createElement("div");
    container.className = "grid-container";

    for (let i = 0; i < 4; i++) {
      const row = document.createElement("div");
      row.classList.add("grid-row");
      for (let j = 0; j < 4; j++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        row.appendChild(cell);
      }
      container.appendChild(row);
    }
    document.body.appendChild(container);
  }

  getRandomPosition(handleClick) {
    let previous = -1;
    setInterval(() => {
      let i;
      do {
        i = Math.floor(Math.random() * 16);
      } while (i === previous);
      previous = i;

      const container = document.getElementsByClassName("grid-container")[0];
      const cells = container.querySelectorAll(".grid-cell");

      const oldImage = container.querySelector("img");
      if (oldImage) {
        oldImage.removeEventListener("click", this.handleImageClick);
        oldImage.remove();
      }

      const image = document.createElement("img");
      const h = this.handleImageClick.bind(this, handleClick, image);
      image.src = goblinImage;
      image.addEventListener("click", h);

      cells[i].appendChild(image);
    }, 1000);
  }

  handleImageClick(handleClick, image, e) {
    e.stopImmediatePropagation();
    handleClick(true);
    image.remove();
  }
}
