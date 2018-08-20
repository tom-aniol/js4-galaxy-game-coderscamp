//

import Galaxy from './Galaxy';

class Game {
  constructor() {
    this.galaxy = new Galaxy(5)
  }

  start() {
    this.galaxy.createSpace()
    console.log(this.galaxy)
  }
}

export default Game;
