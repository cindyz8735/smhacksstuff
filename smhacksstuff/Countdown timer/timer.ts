//Time when hacking ends
var end = new Date('08/19/2016 10:00 AM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    //Vars until hacking ends
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    //Vars until hacking starts
    var d2 = Math.floor((distance - 86400000) / _day);
    var h2 = Math.floor(((distance - 86400000) % _day) / _hour);
    var m2 = Math.floor(((distance - 86400000) % _hour) / _minute);
    var s2 = Math.floor(((distance - 86400000) % _minute) / _second);

    //Give single digit numbers a 0 in front
    if (days.toString().length == 1) {
        days = "0" + days;
    }
    if (hours.toString().length == 1) {
        hours = "0" + hours;
    }
    if (minutes.toString().length == 1) {
        minutes = "0" + minutes;
    }
    if (seconds.toString().length == 1) {
        seconds = "0" + seconds;
    }
    if (d2.toString().length == 1) {
        d2 = "0" + d2;
    }
    if (h2.toString().length == 1) {
        h2 = "0" + h2;
    }
    if (m2.toString().length == 1) {
        m2 = "0" + m2;
    }
    if (s2.toString().length == 1) {
        s2 = "0" + s2;
    }


    if (distance > 86400000) {

        document.getElementById("h1").innerHTML = 'Hacking starts in:';
        document.getElementById('days').innerHTML = d2;
        document.getElementById('hours').innerHTML = h2;
        document.getElementById('minutes').innerHTML = m2;
        document.getElementById('seconds').innerHTML = s2;

    }
    else if (distance < 0) {

        clearInterval(timer);
        document.getElementById("h1").innerHTML = 'Hacking is over!';
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";

        return;
    }
    else {

        document.getElementById("h1").innerHTML = 'Hacking ends in:';
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

    }
}

timer = setInterval(showRemaining, 1000);
