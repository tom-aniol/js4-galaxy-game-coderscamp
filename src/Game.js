import Star from './Galaxy';
//nazywajcie importy w taki sposób zeby myliło bo Star z Galaxy trochę miesza / PR
//a w Pliku index.html nie tworzymy diva na gwiazdę, powinny być generowane w js


class Game {
  constructor() {
    // przypisuje klasie uchwyty do obszarow gry
    this.scoretimerarea = document.querySelector('#scoretimerarea');
    this.gamearea = document.querySelector('#gamearea');
    //tutaj bedzie sie tworzyl obiekt Star
    this.star = new Star();
  }
}// tutaj jest klamra zamykająca klase /PR

// wszystkie metody powinny być w środku klasy, inaczej nie będzie działać /PR
start = () => { 
  console.log('Game started');
}

export default Game;
