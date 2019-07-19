import * as Constants from "../Constants";
import { Skier } from "./Skier";
import { Rhino } from "./Rhino";

/**
 * This class acts as a mediator between the actors
 * In the game, it uses the Mediator Design Pattern
 * to achieve this.
 */
export class Players {
  players = {};
  instance = null;
  /**
   * Since Players object is required to maintain
   * an in-memory database of all the players 
   * we can use the Singleton design Pattern to
   * achieve this behaviour
   * @returns {Players} Players
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new Players();
    }
    return this.instance;
  }
  /**
   * This method returns player objects
   * @param {string} name
   */
  getPlayer(name) {
    return this.players[name];
  }
  /**
   * This method adds new player object
   * @param {string} name
   * @param {string} player
   */
  addPlayer(name, player) {
    this.players[name] = player;
  }
}
