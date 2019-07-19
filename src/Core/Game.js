import * as Constants from "../Constants";
import { AssetManager } from "./AssetManager";
import { Canvas } from "./Canvas";
import { Skier } from "../Entities/Skier";
import { Rhino } from "../Entities/Rhino"; //
import { Players } from "../Entities/Players";
import { ObstacleManager } from "../Entities/Obstacles/ObstacleManager";
import { Rect } from "./Utils";

export class Game {
  gameWindow = null;
  gameStatus = null;

  constructor() {
    this.assetManager = new AssetManager();
    this.canvas = new Canvas(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);
    this.skier = new Skier(0, 0);
    this.rhino = new Rhino(0, 0);
    this.obstacleManager = new ObstacleManager();
    // initialize Players instance and register the players
    const players = Players.getInstance();
    players.addPlayer("skier", this.skier);
    players.addPlayer("rhino", this.rhino);
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  init() {
    this.skier.setDirection(1);
    this.obstacleManager.placeInitialObstacles();
  }

  async load() {
    await this.assetManager.loadAssets(Constants.ASSETS);
  }

  run() {
    this.canvas.clearCanvas();
    this.updateGameWindow();
    this.drawGameWindow();
    requestAnimationFrame(this.run.bind(this));
  }

  updateGameWindow() {
    this.skier.move();
    this.moveRhino();
    const previousGameWindow = this.gameWindow;
    this.calculateGameWindow();
    this.obstacleManager.placeNewObstacle(this.gameWindow, previousGameWindow);
    this.skier.checkIfSkierHitObstacle(this.obstacleManager, this.assetManager);
  }

  drawGameWindow() {
    this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top);
    this.skier.draw(this.canvas, this.assetManager);
    this.drawRhino();
    this.obstacleManager.drawObstacles(this.canvas, this.assetManager);
  }
  /**
   * This method set rhino moving after the Skier has attained some certain amount of y Movement
   */
  moveRhino() {
    const skierYPosition = this.skier.y;
    if (skierYPosition > Constants.RHINO_START_POSITION) {
      this.rhino.move();
    }
  }
 /**
 * This methods introduces rhino player after the SKier has achieved certain distance
 */
  drawRhino() {
    const skierYPosition = this.skier.y;
    if (skierYPosition > Constants.RHINO_START_POSITION) {
      this.rhino.draw(this.canvas, this.assetManager); // Draw Rhino asset on Canvas
    }
  }

  calculateGameWindow() {
    const skierPosition = this.skier.getPosition();
    const left = skierPosition.x - Constants.GAME_WIDTH / 2;
    const top = skierPosition.y - Constants.GAME_HEIGHT / 2;

    this.gameWindow = new Rect(
      left,
      top,
      left + Constants.GAME_WIDTH,
      top + Constants.GAME_HEIGHT
    );
  }

  handleKeyDown(event) {
    if (!this.skier.eaten) {
      switch (event.which) {
        case Constants.KEYS.LEFT:
        this.skier.turnLeft();
        event.preventDefault();
        break;
        case Constants.KEYS.RIGHT:
        this.skier.turnRight();
        event.preventDefault();
        break;
        case Constants.KEYS.UP:
        this.skier.turnUp();
        event.preventDefault();
        break;
        case Constants.KEYS.DOWN:
        this.skier.turnDown();
        event.preventDefault();
        break;
      }
    }
  }
}
