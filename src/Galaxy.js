
class Galaxy {
  constructor (index) {
    this.star = document.createElement('div');
    this.currentStarIndex = 1;
    this.index = index;
  }

  StarClick () {
    if (this.star.addEventListener("click", MouseEvent)) {
      this.currentStarIndex++;
      this.star.remove();
    }
  }

}

export default Galaxy;
