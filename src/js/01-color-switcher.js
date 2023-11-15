function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);

stop.setAttribute('disabled', 'stopBtn');

let interval = null;

function onStart() {
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  start.setAttribute('disabled', 'startBtn');
  stop.removeAttribute('disabled');
}

function onStop() {
  clearInterval(interval);
  body.style.backgroundColor = 'inherit';
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', 'stopBtn');
}
