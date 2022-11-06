import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "notiflix/dist/notiflix-3.2.5.min.css"
import debounce from 'lodash.debounce';
const refs = {
  form: document.querySelector('.form'),
  button: document.querySelector('button'),
}
const { form, button } = refs;
const promiseOptions = {};
button.addEventListener('click', onClick)
form.addEventListener('input', debounce(onInput,300))


function onInput(e) {
  const value = e.target.value; 
  if (e.target.name === "delay") {
    promiseOptions.delay = Number(value);
   
    console.log( promiseOptions)
  }
    if (e.target.name === "step") {
    
    promiseOptions.step = Number(value);
   
    console.log( promiseOptions)
    }
   if (e.target.name === "amount") {
    
    promiseOptions.amount = Number(value);
   
    console.log( promiseOptions)
   }
  
}

function onClick(e) {
  e.preventDefault();
  console.log(promiseOptions)
  let delay = promiseOptions.delay;
  for (let index = 1; index <= promiseOptions.amount; index += 1) {
    delay += promiseOptions.step;
  createPromise(index, delay).then(result => result).catch(error => error);
  
  };
  
}

function createPromise(position, delay) {
  return new Promise((resolver, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  
  });
  
};

// createPromise(1, 100).then(result => console.log(result)).catch(error => console.log(error));
