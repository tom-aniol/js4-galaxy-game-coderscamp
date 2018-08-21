//

class Timer {
  constructor() {
    this.seconds = 0
    this.time = document.querySelector('#time');
    this.time.innerText = this.seconds
  }

  timerOn(){
    setInterval(()=> {
      this.seconds++
      this.time.innerText = this.seconds
    }, 1000)
    return
  }

  resetTimer() {
    this.seconds = 0
    this.time.innerText = this.seconds
  }
}

export default Timer;
