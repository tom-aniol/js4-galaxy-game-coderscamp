//

class Score {
  constructor() {
    this.points = 0
    this.score = document.querySelector('#scorenumber')

    this.score.innerText = this.points

      }

      addPoints(){
        this.points++
        this.score.innerText = this.points

      }

  resetPoints() {
    this.points = 0
    this.score.innerText = this.points
  }
}

export default Score;
