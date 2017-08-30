const DEBUG = true;

class Game {
  constructor(mode) {
    this.mode = Number.parseInt(mode);
    this.choices = {
      a: 'none',
      b: 'none'
    };
    document.querySelectorAll('.one .move span')[0].innerText = '';
    document.querySelectorAll('.two .move span')[0].innerText = '';
    document.querySelectorAll('.result span')[0].innerText = '';
  }

  evaluateMoves() {
    const outcome = this.getWinner(this.choices);
    if (DEBUG) {
      console.log(`Outcome (winner,reason): ${outcome}`);
    }

    document.querySelectorAll('.result span')[0].innerText = `${outcome[1]}: ${outcome[0]} wins!`;
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

    if (choice === 'a') {
      document.querySelectorAll('.one .move span')[0].innerText = this.choices.a;
    } else {
      document.querySelectorAll('.two .move span')[0].innerText = this.choices.b;
    }

    if (this.choices.b !== 'none') {
      this.evaluateMoves();
    } else if (DEBUG) {
      console.log(`this.choices.b is ${this.choices.b}`);
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
    document.querySelectorAll('.one .move span')[0].innerText = this.choices.a;

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
    let player1Type = document.querySelectorAll('.one .type span')[0];
    let player2Type = document.querySelectorAll('.two .type span')[0];

    if (DEBUG) {
      console.log(`Game started in mode ${this.mode}\nChoices are ${JSON.stringify(this.choices)}`);
    }

    switch(this.mode) {
      case 1: {
        player1Type.innerText = 'Human';
        player2Type.innerText = 'Computer';
        this.addPlayerControls();
        break;
      }
      case 2: {
        player1Type.innerText = 'Computer';
        player2Type.innerText = 'Computer';
        const parent = this;
        this.makeComputerMove('a');
        setTimeout(() => {
          parent.makeComputerMove('b');
        }, 100);
        break;
      }
      case 3: {
        /* TODO; Implement
        player1Type.innerText = 'Human';
        player2Type.innerText = 'Human';
        this.addPlayerControls();
        */
        alert('This feature has not yet been implemented.');
        break;
      }
      default:
        return new Error('Invalid parameter');
    }

    document.querySelectorAll('h2 span')[1].style.display = 'none';
    document.querySelectorAll('h2 span')[0].style.display = 'inline';
  }

  getWinner(choices) {
    if (choices.a === 'rock'){
      switch(choices.b) {
        case 'rock':
          return ['No one', 'It\'s a tie'];
        case 'paper':
          return ['Player 2', 'Paper covers rock'];
        case 'scissors':
          return ['Player 1', 'Rock crushes scissors'];
        case 'lizard':
          return ['Player 1', 'Rock crushes lizard'];
        case 'spock':
          return ['Player 2', 'Spock vaporizes rock'];
        default:
          return new Error('Invalid choice');
      }
    } else if (choices.a === 'paper'){
      switch(choices.b) {
        case 'rock':
          return ['Player 1', 'Paper covers rock'];
        case 'paper':
          return ['No one', 'It\'s a tie'];
        case 'scissors':
          return ['Player 2', 'Scissors cuts paper'];
        case 'lizard':
          return ['Player 2', 'Lizard eats paper'];
        case 'spock':
          return ['Player 1', 'Paper disproves spock'];
        default:
          return new Error('Invalid choice');
      }
    } else if (choices.a === 'scissors'){
      switch(choices.b) {
        case 'rock':
          return ['Player 2', 'Rock crushes scissors'];
        case 'paper':
          return ['Player 1', 'Scissors cuts paper'];
        case 'scissors':
          return ['No one', 'It\'s a tie'];
        case 'lizard':
          return ['Player 1', 'Scissors decapitates lizard'];
        case 'spock':
          return ['Player 2', 'Spock smashes scissors'];
        default:
          return new Error('Invalid choice');
      }
    } else if (choices.a === 'lizard'){
      switch(choices.b) {
        case 'rock':
          return ['Player 2', 'Rock crushes lizard'];
        case 'paper':
          return ['Player 1', 'Lizard eats paper'];
        case 'scissors':
          return ['Player 2', 'Scissors decapitates lizard'];
        case 'lizard':
          return ['No one', 'It\'s a tie'];
        case 'spock':
          return ['Player 1', 'Lizard poisons spock'];
        default:
          return new Error('Invalid choice');
      }
    } else if (choices.a === 'spock'){
      switch(choices.b) {
        case 'rock':
          return ['Player 1', 'Spock vaporizes rock'];
        case 'paper':
          return ['Player 2', 'Paper disproves spock'];
        case 'scissors':
          return ['Player 1', 'Spock smashes scissors'];
        case 'lizard':
          return ['Player 2', 'Lizard poisons spock'];
        case 'spock':
          return ['No one', 'It\'s a tie'];
        default:
          return new Error('Invalid choice');
      }
    }
  }

  end() {
    document.querySelectorAll('h2 span')[0].style.display = 'none';
    document.querySelectorAll('h2 span')[1].style.display = 'inline';

    if (DEBUG) {
      console.log('Game Over: Thanks for playing.');
    }
  }
}

export default Game;
