import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { Players } from "./Players";
import { Skier } from "./Skier";
import { endGame } from "../Core/Utils";

export class Rhino extends Entity {
  assetName = Constants.RHINO;
  speed = Constants.RHINO_STARTING_SPEED;
  direction = Constants.SKIER_DIRECTIONS.DOWN;
  eating = false;
  index = 0;
  distance_gained_on_stop = 0;
  animateInterval = null;

  constructor(x, y) {
    super(x, y);
    this.animateRhino();
  }

  /**
   * This method allows the rhino follow the skier direction.
   */
  move() {
    const skier = Players.getInstance("skier").getPlayer("skier");
    this.direction = skier.direction;
    if (!this.eating) {
      if (skier.checkIfSkierStopped()) {
        this.y += this.speed;
        this.distance_gained_on_stop += this.speed;
        this.checkIfRhinoHitsSkier(skier);
      } else {
        this.y = skier.y - Constants.RHINO_SKIER_DISTANCE;
        this.y += this.distance_gained_on_stop;
        this.x = skier.x;
      }
    }
  }
  /**
   * This method animates the rhino movement 
   */
  animateRhino() {
    this.animateInterval = setInterval(() => {
      if (
        this.assetName == Constants.RHINO_LEFT ||
        this.assetName == Constants.RHINO
      ) {
        this.assetName = Constants.RHINO_LEFT2;
      } else {
        this.assetName = Constants.RHINO_LEFT;
      }
    }, 50);
  }
  /**
   * This method checks if the Rhino has collided with the skier
   * @param {Skier} skier
   */
  checkIfRhinoHitsSkier(skier) {
    if (this.y >= skier.y) {
      this.speed = 0;
      if (!this.eating) {
        this.rhinoEatSkier(skier);
      }
    } else {
      this.speed = Constants.RHINO_STARTING_SPEED;
    }
  }
  /**
   * This method allows the rhino to eat the skier
   * @param {Skier} skier
   */
  rhinoEatSkier(skier) {
    this.eating = true;  // set eating true to stop rhino movement
    skier.eaten = true;  
    skier.assetName = Constants.NO_IMAGE; // Remove skier image
    // stop rhino animation
    clearInterval(this.animateInterval);
    const rhinoEatAsset = Constants.RHINO_EAT_ASSET;
    this.assetName = rhinoEatAsset[this.index];
    const intervalID = setInterval(() => {
      this.assetName = rhinoEatAsset[this.index];
      const countSkierAsset = rhinoEatAsset.length - 1;
      if (this.index >= countSkierAsset) this.index = 0;
      this.index += 1;
      if (this.index == countSkierAsset) {
        endGame(intervalID);
      }
    }, 600);
  }
}
