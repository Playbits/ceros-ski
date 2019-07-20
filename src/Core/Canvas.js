export class Canvas {
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  drawOffset = {
    x: 0,
    y: 0
  };
  ctx = null;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.createCanvas();
    // Draw scoreboard
    this.drawScoreboard();
  }

  createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.id = "skiCanvas";
    canvas.width = this.width * window.devicePixelRatio;
    canvas.height = this.height * window.devicePixelRatio;
    canvas.style.width = this.width + "px";
    canvas.style.height = this.height + "px";

    this.ctx = canvas.getContext("2d");
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    document.body.appendChild(canvas);
  }

  /**
   * This method created the scoreboard
   */
  drawScoreboard() {
    const scoreboard = document.createElement("div");
    const scoreboardTitle = document.createElement("h2");
    const speedContainer = document.createElement("p");
    const levelContainer = document.createElement("p");
    const xContainer = document.createElement("p");
    const yContainer = document.createElement("p");

    scoreboardTitle.className = "title";
    scoreboardTitle.innerHTML = "Scoreboard";
    speedContainer.innerHTML = '<span> Speed </span> <span id="gameSpeed"></span>';
    levelContainer.innerHTML = '<span>Level</span> <span id="gameLevel"></span>';
    xContainer.innerHTML = '<span> X-Position </span> <span id="skierXPosition"></span>';
    yContainer.innerHTML = '<span> Y-Position </span> <span id="skierYPosition"></span>';
    scoreboard.id = "scoreboard";

    scoreboard.appendChild(scoreboardTitle);
    scoreboard.appendChild(speedContainer);
    scoreboard.appendChild(levelContainer);
    scoreboard.appendChild(xContainer);
    scoreboard.appendChild(yContainer);
    document.body.appendChild(scoreboard);
  }

  clearCanvas() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  setDrawOffset(x, y) {
    this.drawOffset.x = x;
    this.drawOffset.y = y;
  }

  drawImage(image, x, y, width, height) {
    x -= this.drawOffset.x;
    y -= this.drawOffset.y;

    this.ctx.drawImage(image, x, y, width, height);
  }
}
