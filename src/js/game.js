class Game {
  constructor(type) {
    this.type = type;
    this.choice.a = 'none';
    this.choice.b = 'none';
  }

  start() {
    // take turn
  }

  end() {
    console.log('Thanks for playing.')
  }
}

export default Game;
