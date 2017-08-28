const DEBUG = true;

class Game {
  constructor(mode) {
    this.mode = mode;
    this.choices = {
      a: 'none',
      b: 'none'
    };
  }

  makeComputerMove() {
    const move = Math.random().toFixed(2);
    console.log('computer\'s move:');
    if(0 < move && move < 0.20) {
      if (DEBUG) {
        console.log('rock');
      }

      this.choices.b = 'rock';
    } else if (0.21 < move && move < 0.40) {
      if (DEBUG) {
        console.log('paper');
      }

      this.choices.b = 'paper';
    } else if (0.41 < move && move < 0.60) {
      if (DEBUG) {
        console.log('scissors');
      }

      this.choices.b = 'scissors';
    } else if (0.61 < move && move < 0.80) {
      if (DEBUG) {
        console.log('lizard');
      }

      this.choices.b = 'lizard';
    } else if (0.81 < move && move < 1) {
      if (DEBUG) {
        console.log('spock');
      }

      this.choices.b = 'spock';
    } else {
      return new Error('Invalid parameter');
    }

    console.log(this.getWinner(this.choices));
  }

  addPlayerControls() {
    window.addEventListener('keyup', (e) => {
      switch(e.keyCode) {
        case 82:
          if (DEBUG) {
            console.log('Human plays rock');
          }

          this.choices.a = 'rock';
          break;
        case 80:
          if (DEBUG) {
            console.log('Human plays paper');
          }

          this.choices.a = 'paper';
          break;
        case 83:
          if (DEBUG) {
            console.log('Human plays scissors');
          }

          this.choices.a = 'scissors';
          break;
        case 76:
          if (DEBUG) {
            console.log('Human plays lizard');
          }

          this.choices.a = 'lizard';
          break;
        case 86:
          if (DEBUG) {
            console.log('Human plays spock');
          }

          this.choices.a = 'spock';
          break;
        default:
          return new Error('Invalid parameters');
      }

      this.makeComputerMove();
    });
  }

  start() {
    console.log('started in mode', this.mode);
    this.addPlayerControls();
    // this.makeComputerMove();
  }

  getWinner(choices) {
    if (choices.a === 'rock'){
      switch(choices.b) {
        case 'rock':
          return ['tie', 'No winner'];
        case 'paper':
          return ['player b', 'Paper covers rock'];
        case 'scissors':
          return ['player a', 'Rock crushes scissors'];
        case 'lizard':
          return ['player a', 'Rock crushes lizard'];
        case 'spock':
          return ['player b', 'Spock vaporizes rock'];
        default:
          return new Error('Invalid choice');
      }
    } else if (choices.a === 'paper'){
      switch(choices.b) {
        case 'rock':
          return ['player a', 'Paper covers rock'];
        case 'paper':
          return ['tie', 'No winner'];
        case 'scissors':
          return ['player b', 'Scissors cuts paper'];
        case 'lizard':
          return ['player b', 'Lizard eats paper'];
        case 'spock':
          return ['player a', 'Paper disproves spock'];
        default:
          return new Error('Invalid choice');
      }
    } else if (choices.a === 'scissors'){
      switch(choices.b) {
        case 'rock':
          return ['player b', 'Rock crushes scissors'];
        case 'paper':
          return ['player a', 'Scissors cuts paper'];
        case 'scissors':
          return ['tie', 'No winner'];
        case 'lizard':
          return ['player a', 'Scissors decapitates lizard'];
        case 'spock':
          return ['player b', 'Spock smashes scissors'];
        default:
          return new Error('Invalid choice');
      }
    } else if (choices.a === 'lizard'){
      switch(choices.b) {
        case 'rock':
          return ['player b', 'Rock crushes lizard'];
        case 'paper':
          return ['player a', 'Lizard eats paper'];
        case 'scissors':
          return ['player b', 'Scissors decapitates lizard'];
        case 'lizard':
          return ['tie', 'No winner'];
        case 'spock':
          return ['player a', 'Lizard poisons spock'];
        default:
          return new Error('Invalid choice');
      }
    } else if (choices.a === 'spock'){
      switch(choices.b) {
        case 'rock':
          return ['player a', 'Spock vaporizes rock'];
        case 'paper':
          return ['player b', 'Paper disproves spock'];
        case 'scissors':
          return ['player a', 'Spock smashes scissors'];
        case 'lizard':
          return ['player b', 'Lizard poisons spock'];
        case 'spock':
          return ['tie', 'No winner'];
        default:
          return new Error('Invalid choice');
      }
    }
  }

  end() {
    console.log('Thanks for playing.');
    // reset choices
  }
}

export default Game;