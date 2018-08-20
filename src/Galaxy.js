//

import Star from './Star'
import Score from './Score'


class Galaxy {
  constructor(starCount) {
    this.starCount = starCount
    this.gameArea = document.querySelector('#gamearea')
    this.order = 1
    this.score = new Score()
  }


  hover(star) {
    if (this.order >= this.starCount) {
      this.gameArea.innerHTML = ''
      this.order = 1
      this.score.addPoints()

      setTimeout(()=> {
        this.createSpace();
      }, 300)
      return

    }

    if (this.order == star.innerText) {
      star.remove()
      this.order++
      this.score.addPoints()
    } else {
      this.gameArea.innerHTML = ''
      this.score.resetPoints()
      setTimeout(() => {
        this.createSpace();
      }, 300)
      this.order = 1
    }


  }


  createSpace() {
    for (let i = 0; i < this.starCount; i++) {
      let newStar = new Star(i)
      newStar.star.addEventListener('mouseover', (e) => this.hover(e.target))
      newStar.create(i)
    }
  }


}

export default Galaxy;
