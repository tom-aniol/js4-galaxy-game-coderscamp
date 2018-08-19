import Galaxy from './Galaxy';
//(poprawione) /Sasza
//nazywajcie importy w taki sposób zeby myliło bo Star z Galaxy trochę miesza / PR
//a w Pliku index.html nie tworzymy diva na gwiazdę, powinny być generowane w js


class Game {
  constructor() {
    // przypisuje klasie uchwyty do obszarow gry
    this.scoretimerarea = document.querySelector('#scoretimerarea');
    this.gamearea = document.querySelector('#gamearea');
    this.star = new Galaxy(5);
  }

  start = () => {
    console.log('Game started');
  }

  NewGame() {
    if (this.currentStarIndex > this.index) {
      console.log ('Game over');
    }
  }

}//(poprawione) /Sasza
// tu jest klamra zamykająca klase, wszystkie metody powinny być w środku klasy, inaczej nie będzie działać /PR

export default Game;
