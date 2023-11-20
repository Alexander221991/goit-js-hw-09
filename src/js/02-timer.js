import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.getElementById('datetime-picker'),
  btn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  //   *******************************************************
  container: document.querySelector('.timer'),
  box: document.querySelectorAll('.field'),
  value: document.querySelectorAll('.value'),
  // *********************************************************
};

// *********************************************************
refs.container.style.display = 'flex';
refs.container.style.gap = '10px';
refs.container.style.paddingTop = '15px';
refs.box.forEach(function (field) {
  field.style.display = 'grid';
  field.style.justifyItems = 'center';
});

refs.value.forEach(function (value) {
  value.style.fontSize = '40px';
});

// *********************************************************
refs.btn.addEventListener('click', handleClick);
refs.btn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate > new Date()) {
      refs.btn.removeAttribute('disabled');
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.btn.setAttribute('disabled', 'disabled');
    }
  },
};

const datePicker = flatpickr(refs.input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function handleClick() {
  const selectedDate = datePicker.selectedDates[0];

  let timeDiff = selectedDate - new Date();

  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    if (timeDiff < 0) {
      clearInterval(timerInterval);
      // refs.btn.setAttribute('disabled', 'disabled');
    } else {
      timeDiff -= 1000;
    }
    const timeObj = convertMs(timeDiff);

    refs.days.textContent = addLeadingZero(timeObj.days);
    refs.hours.textContent = addLeadingZero(timeObj.hours);
    refs.minutes.textContent = addLeadingZero(timeObj.minutes);
    refs.seconds.textContent = addLeadingZero(timeObj.seconds);

    refs.btn.setAttribute('disabled', 'disabled');
  }
  updateTimer();
}
