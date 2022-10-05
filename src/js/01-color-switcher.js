function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBnt = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timeId = null;

stopBtn.disabled = true;

startBnt.addEventListener('click', onStartBtn);

function onStartBtn() {
  timeId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startBnt.disabled = true;
    stopBtn.disabled = false;
  }, 1000);
}

stopBtn.addEventListener('click', () => {
  clearInterval(timeId);
  stopBtn.disabled = true;
  startBnt.disabled = false;
});
