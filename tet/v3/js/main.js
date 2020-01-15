    document.addEventListener("DOMContentLoaded", function() {
        let targetDate = new Date("'01/25/2020 00:00:00 GMT+0700 (SE Asia Standard Time)");
        let onStart = () => {
            document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'))
        }
        let onTick = ({ days, hours, minutes, seconds }) => {
            document.querySelector('.countdown-item.days').innerHTML = days;
            document.querySelector('.countdown-item.hours').innerHTML = hours;
            document.querySelector('.countdown-item.minutes').innerHTML = minutes;
            document.querySelector('.countdown-item.seconds').innerHTML = seconds;
        };
        let options = new LsCountdownOptions({ targetDate, onStart, onTick });
        let countdown = new LsCountdown(options);

        countdown.start();
        window.mycountdown = countdown;
    });