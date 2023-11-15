import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', handleSubmit);

let amount = 0;
let step = 0;
let delay = 0;
let i = 0;
let timerId = 0;

function handleSubmit(event) {
  event.preventDefault();
  amount = Number(refs.amount.value);
  step = Number(refs.step.value);
  delay = Number(refs.delay.value);

  for (i = 0; i < amount; i += 1) {
    timerId += 1;

    createPromise(timerId, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.success(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delay += step;
  }
  timerId = 0;
  i = 0;

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      timerId = setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
}
