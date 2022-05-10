import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
};

refs.form.addEventListener('submit', onFormSubmit)

let informSubmitObject = {};

function onFormSubmit(e) {
  e.preventDefault();
  
  let delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    
    createPromise(i, delay);
    delay += step;


  }

}

console.log(informSubmitObject);




function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
           Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        // resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        // reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
  }

    }, delay)

  })
  

return promise;
}

