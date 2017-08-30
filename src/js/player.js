class Player {
  constructor(type) {
    this.type = type;
  }

  takeTurn() {
    if (this.type === 'human') {
      // TODO: To implement
    } else if (this.type === 'machine') {
      // TODO: To implement
    } else {
      throw new Error(`Invalid parameter: ${this.type}`);
    }
  }
}

export default Player;
