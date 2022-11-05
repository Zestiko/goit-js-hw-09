import flatpickr from 'flatpickr'
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';
import "notiflix/dist/notiflix-3.2.5.min.css"
const refs = {
    start: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}



refs.start.disabled = true;  


class Timer {
  constructor({ onTick  }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    
    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start(startTime) {
    if (this.isActive) {
      return;
    }
    this.startTime = startTime;
    // const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  /*
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается часов/минут/секунд
   * - Возвращает обьект со свойствами hours, mins, secs
   * - Адская копипаста со стека 💩
   */
    getTimeComponents(time) {
    const days = this.pad(Math.floor((time / (1000 * 60 * 60 * 24))));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, minutes, seconds };
  }

  /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
    onTick: updateClockface,
    // startTime: selectedDates[0],
});

refs.start.addEventListener('click', () => {
    timer.start(selectedDates[0]);
});

function updateClockface({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
        Report.failure(
'Wrong',
'"Please choose a date in the future"',
'Okay :(',
);
    } else {
        refs.start.disabled = false;  
    }
  },
};



flatpickr("#datetime-picker", options);