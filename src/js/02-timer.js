import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  buttonStart: document.querySelector('button[data-start]'),
  input: document.querySelector('#datetime-picker'),
  timerDays: document.querySelector('span[data-days]'),
  timerHours: document.querySelector('span[data-hours]'),
  timerMinutes: document.querySelector('span[data-minutes]'),
  timerSeconds: document.querySelector('span[data-seconds]'),
};

Notify.init({
  width: '300px',
  position: 'right-top',
  timeout: 2500,
});

refs.buttonStart.disabled = true;
let chosenDate = 0;

const fp = flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = selectedDates[0].getTime();
    if (chosenDate < new Date()) {
      Notify.failure('Please choose a date in the future');
      this.enableTime = false;
    } else {
      refs.buttonStart.disabled = false;
    }
  },
});

refs.buttonStart.addEventListener('click', onTimer);

function onTimer() {
  const timerId = setInterval(() => {
    differenceMs = chosenDate - new Date();
    const timer = convertMs(differenceMs);

    if (differenceMs <= 0) {
      clearInterval(timerId);
      Notify.success('Timer completed!');
      return;
    }

    updateTimer(timer);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimer({ days, hours, minutes, seconds }) {
  refs.timerDays.textContent = addLeadingZero(`${days}`);
  refs.timerHours.textContent = addLeadingZero(`${hours}`);
  refs.timerMinutes.textContent = addLeadingZero(`${minutes}`);
  refs.timerSeconds.textContent = addLeadingZero(`${seconds}`);
}
