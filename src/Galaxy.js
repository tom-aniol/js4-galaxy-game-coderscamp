
class Star {
  constructor() {
    var newStar = document.createElement("div");
    newStar.textContent = 'Czesc';

    var star = document.querySelector('star');
    document.body.insertBefore(newStar,star);

    console.log ("Dziala")
  }
}

export default Star;
