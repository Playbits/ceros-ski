import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";

export class Skier extends Entity {
  assetName = Constants.SKIER_DOWN;

  direction = Constants.SKIER_DIRECTIONS.DOWN;
  speed = Constants.SKIER_STARTING_SPEED;
  eaten = false;

  constructor(x, y) {
    super(x, y);
  }

  setDirection(direction) {
    this.direction = direction;
    this.assetName = Constants.SKIER_DIRECTION_ASSET[direction];
  }

  move() {
    switch (this.direction) {
      case Constants.SKIER_DIRECTIONS.LEFT_DOWN:
        this.moveSkierLeftDown();
        break;
      case Constants.SKIER_DIRECTIONS.DOWN:
        this.moveSkierDown();
        break;
      // Introduced Skier Jump method
      case Constants.SKIER_DIRECTIONS.JUMP:
        this.moveSkierJump();
        break;
      case Constants.SKIER_DIRECTIONS.RIGHT_DOWN:
        this.moveSkierRightDown();
        break;
    }
  }

  moveSkierLeft() {
    this.x -= Constants.SKIER_STARTING_SPEED;
  }

  moveSkierLeftDown() {
    this.x -= this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
  }

  moveSkierDown() {
    this.y += this.speed;
  }

  moveSkierRightDown() {
    this.x += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
  }

  moveSkierRight() {
    this.x += Constants.SKIER_STARTING_SPEED;
  }
  /**
   * This method allows the skier to Jump and
   * Stops the jump after 200 milliseconds
   */
  moveSkierJump() {
    const direction = this.direction;
    this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    this.skierJump(direction);
    //Reset skier direction with 200 milliseconds delay
    setTimeout(() => {
      this.setDirection(direction);
    }, 200);
  }
  /**
   * This method allows the kier to jump in any direction
   * @param {int} direction
   */
  skierJump(direction) {
    this.direction = direction;
    this.assetName =
      Constants.SKIER_DIRECTION_ASSET[Constants.SKIER_DIRECTIONS.JUMP];
  }

  moveSkierUp() {
    this.y -= Constants.SKIER_STARTING_SPEED;
  }

  turnLeft() {
    switch (this.direction) {
      case Constants.SKIER_DIRECTIONS.LEFT:
        this.moveSkierLeft();
        break;
      case Constants.SKIER_DIRECTIONS.CRASH:
        this.setDirection(Constants.SKIER_DIRECTIONS.LEFT);
        this.moveSkierLeft();
        break;
      default:
        this.setDirection(this.direction - 1);
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case Constants.SKIER_DIRECTIONS.RIGHT:
        this.moveSkierRight();
        break;
      case Constants.SKIER_DIRECTIONS.CRASH:
        this.setDirection(Constants.SKIER_DIRECTIONS.RIGHT);
        this.moveSkierRight();
        break;
      default:
        this.setDirection(this.direction + 1);
        break;
    }
  }

  /**
   * This methods allows the skier to move up or jump an obstacle depending on the skier direction
   */
  turnUp() {
    if (
      this.direction === Constants.SKIER_DIRECTIONS.LEFT ||
      this.direction === Constants.SKIER_DIRECTIONS.RIGHT
    ) {
      this.moveSkierUp();
    } else {
      this.moveSkierJump();
    }
  }

  turnDown() {
    this.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
  }
  /**
   * This method checks if the skier has stopped either by crashing into an obstacle or direction left or right
   */
  checkIfSkierStopped() {
    const stopDirection = [
      Constants.SKIER_DIRECTIONS.CRASH,
      Constants.SKIER_DIRECTIONS.LEFT,
      Constants.SKIER_DIRECTIONS.RIGHT
    ];
    return stopDirection.includes(this.direction);
  }

  checkIfSkierHitObstacle(obstacleManager, assetManager) {
    const asset = assetManager.getAsset(this.assetName);
    const skierBounds = new Rect(
      this.x - asset.width / 2,
      this.y - asset.height / 2,
      this.x + asset.width / 2,
      this.y - asset.height / 4
    );
    const collision = obstacleManager.getObstacles().find(obstacle => {
      const obstacleAsset = assetManager.getAsset(obstacle.getAssetName());
      const obstaclePosition = obstacle.getPosition();
      const obstacleBounds = new Rect(
        obstaclePosition.x - obstacleAsset.width / 2,
        obstaclePosition.y - obstacleAsset.height / 2,
        obstaclePosition.x + obstacleAsset.width / 2,
        obstaclePosition.y
      );
      return intersectTwoRects(skierBounds, obstacleBounds);
    });

    if (collision) {
      const rocksAsset = [Constants.ROCK1, Constants.ROCK2]; // Rocks assets
      let assetName = collision.assetName;
      // Allows SKier to automatically jump over rocks
      if (rocksAsset.includes(assetName)) {
        this.moveSkierJump();
      } else {
        this.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
      }
    }
  }
}
