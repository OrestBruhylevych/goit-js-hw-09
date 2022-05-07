import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
};

let deadline;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        deadline = selectedDates[0];
        validetedDeadline(deadline);
  },
};

refs.startBtn.setAttribute("disabled", "disabled");
refs.startBtn.addEventListener('click', onStartBtnClick);

flatpickr(refs.input, options);

function onStartBtnClick() {

    setInterval(() => {
        const ms = validetedDeadline(deadline);
        const deadlineConvertObject = convertMs(ms);
        const formatedLeadingZero = addLeadingZero(deadlineConvertObject);
        addNumberOnScreen(formatedLeadingZero);
        refs.startBtn.setAttribute("disabled", "disabled");

    }, 1000);
    refs.input.setAttribute("disabled", "disabled");
}

function validetedDeadline(data) {
    const deadline = new Date(data);
    const today = Date.now();

    if (deadline < today) {
        window.alert("Please choose a date in the future");
        refs.startBtn.setAttribute("disabled", "disabled");
    }
    
    if (deadline > today) {
        refs.startBtn.removeAttribute("disabled");
        return (deadline - today);
    }

}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero({days, hours, minutes, seconds}) {
    return {
        days: days >= 10 ? days: `0${days}`,
        hours: hours >= 10 ? hours: `0${hours}`,
        minutes: minutes >= 10 ? minutes: `0${minutes}`,
        seconds: seconds >= 10 ? seconds: `0${seconds}`
    }

}

function addNumberOnScreen({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
} 

