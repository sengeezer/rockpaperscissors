require('../css/main.scss');
import Game from './game';

const DEBUG = true;

const gameModes = document.querySelectorAll('nav ul li a');
const startButton = document.querySelectorAll('button[name=start]')[0];

let activeMode = 0;

function handleModeEvent(link, ev) {
  ev.preventDefault();
  if (DEBUG) {
    console.log(`Active mode: ${ev.srcElement.dataset.type}`);
  }

  activeMode = ev.srcElement.dataset.type;

  gameModes.forEach((number, index) => {
    if (DEBUG) {
      console.log(`DEBUG: ${activeMode}, ${index + 1}`);
    }

    document.querySelectorAll('nav ul li a')[index].style.fontWeight = 'normal';
    if (parseInt(activeMode) === index + 1) {
        document.querySelectorAll('nav ul li a')[index].style.fontWeight = 'bold';
    }
  });
}

gameModes.forEach((link) => {
  link.addEventListener('click', (ev) => {
    handleModeEvent(link, ev);
  });
});

startButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  let currentGame = new Game(activeMode);
  currentGame.start();
});
