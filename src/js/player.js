class Player {
  constructor(type) {
    this.type = type;
  }

  takeTurn() {
    if (this.type === 'human') {

    } else if (this.type === 'machine') {

    } else {
      throw new Error('No player type specified');
    }
  }
}

export default Player;
