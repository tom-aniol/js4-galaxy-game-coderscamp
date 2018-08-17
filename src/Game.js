import Galaxy from './Galaxy';

class Game {
  constructor() {
    this.gamearea = document.querySelector('gamearea');
    this.star = new Galaxy();
  }
}


export default Game;
