const DEBUG = true;

class Game {
  constructor(mode) {
    this.mode = Number.parseInt(mode);
    this.choices = {
      a: 'none',
      b: 'none'
    };
  }

  evaluateMoves() {
    console.log(this.getWinner(this.choices));
    this.end();
  }

  makeComputerMove(choice) {
    if (DEBUG) {
      console.log('makeComputerMove called with', choice);
    }
    const move = Math.random().toFixed(2);

    if(0 < move && move < 0.20) {
      if (DEBUG) {
        console.log('Computer plays rock');
      }

      this.choices[choice] = 'rock';
    } else if (0.21 < move && move < 0.40) {
      if (DEBUG) {
        console.log('Computer plays paper');
      }

      this.choices[choice] = 'paper';
    } else if (0.41 < move && move < 0.60) {
      if (DEBUG) {
        console.log('Computer plays scissors');
      }

      this.choices[choice] = 'scissors';
    } else if (0.61 < move && move < 0.80) {
      if (DEBUG) {
        console.log('Computer plays lizard');
      }

      this.choices[choice] = 'lizard';
    } else if (0.81 < move && move < 1) {
      if (DEBUG) {
        console.log('Computer plays spock');
      }

      this.choices[choice] = 'spock';
    } else {
      return new Error('Invalid parameter');
    }

    if (this.choices.b !== 'none') {
      this.evaluateMoves();
    }
  }

  handlePlayerMove(e) {
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

    this.makeComputerMove('b');
  }

  addPlayerControls() {
    const parent = this;
    window.addEventListener('keyup', function handler(e) {
      parent.handlePlayerMove(e);
      this.removeEventListener('keyup', handler);
    });
  }

  start() {
    if (DEBUG) {
      console.log(`Game started in mode ${this.mode}\nChoices are ${JSON.stringify(this.choices)}`);
    }

    if (this.mode !== 2) {
      this.addPlayerControls();
    }

    if (this.mode === 2) {
      const parent = this;
      this.makeComputerMove('a');
      setTimeout(() => {
        parent.makeComputerMove('b');
      }, 100);
    }

    document.querySelectorAll('h2 span')[1].style.display = 'none';
    document.querySelectorAll('h2 span')[0].style.display = 'inline';
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
    document.querySelectorAll('h2 span')[0].style.display = 'none';
    document.querySelectorAll('h2 span')[1].style.display = 'inline';
    console.log('Thanks for playing.');
    // reset choices
  }
}

export default Game;
