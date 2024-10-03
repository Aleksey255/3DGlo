const timer = (deadline) => {
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
      timerDays.textContent = getTime.days;
      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;
    }
    if (getTime.days >= 0 && getTime.days < 10) {
      timerDays.textContent = `0${getTime.days}`;
    }
    if (getTime.hours >= 0 && getTime.hours < 10) {
      timerHours.textContent = `0${getTime.hours}`;
    }
    if (getTime.minutes >= 0 && getTime.minutes < 10) {
      timerMinutes.textContent = `0${getTime.minutes}`;
    }
    if (getTime.seconds >= 0 && getTime.seconds < 10) {
      timerSeconds.textContent = `0${getTime.seconds}`;
    }
  };
  setInterval(updateClock, 1000);
};
export default timer;
