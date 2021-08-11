const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

//Для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

document.body.style.backgroundColor = colors[2];

let timlerId = null;
let isActive = false;

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn(event) {
  if (isActive) {
    return;
  }
  isActive = true;
  timlerId = setInterval(() => {
    console.log('hello');
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
}

function onClickStopBtn(event) {
  isActive = false;
  clearInterval(timlerId);
}