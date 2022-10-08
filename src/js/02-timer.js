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
