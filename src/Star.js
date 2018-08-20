//

import _ from 'lodash'

class Star {
  constructor(number) {
    this.gameArea = document.querySelector('#gamearea')
    this.star = document.createElement('div');
    this.star.classList.add('star');

    this.star.innerText = number + 1
    this.gameAreaWidth = this.gameArea.offsetWidth
    this.gameAreaHeight = this.gameArea.offsetHeight
    let size = _.random(50, 100);

    let left = _.random(0, this.gameAreaWidth - size);
    let top = _.random(0, this.gameAreaHeight - size);
    this.star.setAttribute('style', `top: ${top}px; left: ${left}px; height: ${size}px; width: ${size}px`);

  }
  create() {
    this.gameArea.appendChild(this.star)
  }
}

export default Star;
