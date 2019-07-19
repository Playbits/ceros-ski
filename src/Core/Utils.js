export function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function intersectTwoRects(rect1, rect2) {
  return !(
    rect2.left > rect1.right ||
    rect2.right < rect1.left ||
    rect2.top > rect1.bottom ||
    rect2.bottom < rect1.top
  );
}
/**
 * This method ends and restarts the game.
 * @param {intervalID} intervalID 
 */
export function endGame(intervalID){
  clearInterval(intervalID)
  alert('GAME OVER');
  const confirmed = confirm('Do you want to restart the game');
  if(confirmed){
      location.reload();
  }
}

export class Rect {
  left = 0;
  top = 0;
  right = 0;
  bottom = 0;

  constructor(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
}
