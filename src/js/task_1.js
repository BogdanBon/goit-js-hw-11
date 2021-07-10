import '../sass/main.scss';

const refs = {
    startBtn: document.querySelector('.start-btn'),
    stopBtn: document.querySelector('.stop-btn'),
}

let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)

function onStartBtnClick() {
    console.log('start btn click')
    const body = document.querySelector('body')
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.removeEventListener('click', onStartBtnClick)
}

function onStopBtnClick() {
    console.log('stop btn click')
    clearInterval(intervalId)
    refs.stopBtn.removeEventListener('click', onStopBtnClick)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}