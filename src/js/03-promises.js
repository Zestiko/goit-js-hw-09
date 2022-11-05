const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  button: document.querySelector('button')
}
const promiseOptions = {

};
refs.button.addEventListener('click', onClick)
refs.form.addEventListener('input', onInput)

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
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   } else {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   }
// }

