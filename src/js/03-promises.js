import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const firstDelay = document.querySelector('input[name=delay]');
const delayStep = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const getValue = {
    delay: Number(firstDelay.value),
    step: Number(delayStep.value),
    amount: Number(amount.value),
  };

  for (let i = 1; i <= getValue.amount; i += 1) {
    getValue.delay += getValue.step;
    createPromise(i, getValue.delay).then(onSuccess).catch(onError);
    form.reset();
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
