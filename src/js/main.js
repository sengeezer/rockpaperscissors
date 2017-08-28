require('../css/main.scss');
import Game from './game';

const DEBUG = true;

const gameModes = document.querySelectorAll('nav ul li a');
const startButton = document.querySelectorAll('button[name=start]')[0];

let activeMode = 0;

function handleModeEvent(link, ev) {
  ev.preventDefault();
  if (DEBUG) {
    console.log(ev.srcElement.dataset.type);
  }

  activeMode = ev.srcElement.dataset.type;
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
