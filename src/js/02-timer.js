import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const buttonStart = document.querySelector('button[data-start]');
buttonStart.disabled = true;
console.log(buttonStart);

const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0].getTime();
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      buttonStart.disabled = false;
    }
  },
});

// buttonStart.addEventListener('click', onStartBtn);

// function onStartBtn() {}

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const a = new Date() - selectedDates[0];

//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
