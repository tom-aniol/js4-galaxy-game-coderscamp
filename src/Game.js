import Star from './Galaxy';

class Game {
  constructor() {
    // przypisuje klasie uchwyty do obszarow gry
    this.scoretimerarea = document.querySelector('#scoretimerarea');
    this.gamearea = document.querySelector('#gamearea');
    //tutaj bedzie sie tworzyl obiekt Star
    this.star = new Star();
  }
}

start = () => {
  console.log('Game started');
}

export default Game;
