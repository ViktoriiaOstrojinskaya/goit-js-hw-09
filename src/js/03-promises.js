import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
};

refs.form.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      // Fulfill
      // const promise = new Promise(() => {});
    } else {
      // Reject
    }
  }, `${refs.delay.value}`);
}
