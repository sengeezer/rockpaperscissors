class Player {
  constructor(type) {
    this.type = type;
  }

  takeTurn() {
    if (this.type === 'human') {

    } else if (this.type === 'machine') {

    } else {
      throw new Error(`Invalid parameter: ${this.type}`);
    }
  }
}

export default Player;
