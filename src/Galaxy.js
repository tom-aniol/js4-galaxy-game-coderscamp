
class Star {
  constructor() {
    var newStar = document.createElement('div');
    newStar.textContent = 'Czesc'; // https://stackoverflow.com/questions/35213147/difference-between-text-content-vs-inner-text link do stacaka, zobacz sobie tez na innerText i co za sobą niosą oba rozwiązania /PR

    var star = document.querySelector('star'); // brakuje # przed star i temu nie działą /PR
    document.body.insertBefore(newStar, star); // zobacz raczej na appendChild /PR

    console.log('Dziala');
  }
}

export default Star;
