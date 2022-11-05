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
  let delay = promiseOptions.delay;
  for (let index = 1; index <= promiseOptions.amount; index += 1) {
    delay += promiseOptions.step;
  createPromise(index, delay).then(result => console.log(result)).catch(error => console.log(error));
  
  };
}

function createPromise(position, delay) {
  return new Promise((resolver, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  
  });
  
};

// createPromise(1, 100).then(result => console.log(result)).catch(error => console.log(error));
