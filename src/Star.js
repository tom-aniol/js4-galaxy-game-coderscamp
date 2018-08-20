

function printstars() {
  star = new Star();
  document.write(star.x, star.y);
}

class Star {
  constructor() {
    this.x = 500;
    this.y = 200;

  }
}
