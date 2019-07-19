import "babel-polyfill";
import { Skier } from "../Entities/Skier";
import { Rhino } from "../Entities/Rhino";
import * as Constants from "../Constants";

const skier = new Skier(0, 0);
const rhino = new Rhino(0, 0);

describe("Skier movement", () => {
  beforeEach(() => {
    skier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
  });

  test("test skier direction left", () => {
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.CRASH);
    skier.turnLeft();
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
  });

  test("test skier direction right", () => {
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.CRASH);
    skier.turnRight();
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT);
  });
  describe("test skier direction up", () => {
    test("Move up", () => {
      const directions = [
        Constants.SKIER_DIRECTIONS.RIGHT,
        Constants.SKIER_DIRECTIONS.LEFT
      ];
      for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        skier.setDirection(direction);
        skier.turnUp();
        expect(skier.direction).toBe(direction);
        expect(skier.assetName).toBe(Constants.SKIER_DIRECTION_ASSET[direction]);
      }
    });
    test("test jump", () => {
      skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
      skier.turnUp();
      expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
      expect(skier.direction).not.toBe(Constants.SKIER_DIRECTIONS.LEFT);
      expect(skier.direction).not.toBe(Constants.SKIER_DIRECTIONS.RIGHT);
      expect(skier.assetName).toBe(Constants.SKIER_JUMP);
    });
  });

  test("check if skier stopped", () => {
    const stopDirection = [
      Constants.SKIER_DIRECTIONS.CRASH,
      Constants.SKIER_DIRECTIONS.LEFT,
      Constants.SKIER_DIRECTIONS.RIGHT
    ];
    for (let i = 0; i < 6; i++) {
      skier.direction = i;
      if (stopDirection.includes(i)) {
        expect(skier.checkIfSkierStopped()).toBeTruthy();
      } else {
        expect(skier.checkIfSkierStopped()).toBeFalsy();
      }
    }
  });
});

describe("Rhino Movement and actions", () => {
  test("Checks if rhino hits skier", () => {
    const yPosition = 300;
    skier.y = yPosition;
    rhino.y = yPosition;
    rhino.checkIfRhinoHitsSkier(skier);
    expect(rhino.speed).toBe(0);
    expect(rhino.eating).toBeTruthy();
    expect(skier.eaten).toBeTruthy();
  });
});
