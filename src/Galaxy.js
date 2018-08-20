//

import Star from './Star'


class Galaxy {
  constructor(starCount) {
    this.starCount = starCount
    this.gameArea = document.querySelector('#gamearea')
  }

  createSpace() {
    for (let i = 0; i < this.starCount; i++) {
      let star = new Star(i)

      star.create()
    }
  }
}

export default Galaxy;
