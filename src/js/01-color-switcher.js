const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}
refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);
let intevalId = null;

function onStart() {
    refs.start.disabled = true;
   intevalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()    
    },1000)
    

}

function onStop() {
    if (refs.start.disabled) {
        refs.start.disabled = false;
        clearInterval(intevalId);
    }
    
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

