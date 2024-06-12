let play = document.getElementById("play");
let start = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;


let d, h, m, s;
let t;




const timer = () => {
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");

    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
            if (hours == 24) {
                hours = 0;
                days++;
            }
        }
    }

    if (days < 10) {
        d = "0" + days;
    }
    else {
        d = days;
    }
    if (hours < 10) {
        h = "0" + hours;
    }
    else {
        h = hours;
    }
    if (minutes < 10) {
        m = "0" + minutes;
    }
    else {
        m = minutes;
    }
    if (seconds < 10) {
        s = "0" + seconds;
    }
    else {
        s = seconds;
    }

    document.getElementById("days").value = d;
    document.getElementById("hours").value = h;
    document.getElementById("minutes").value = m;
    document.getElementById("seconds").value = s;


}

play.addEventListener('click', () => {
    if (!start) {
        t = setInterval(timer, 1000);
        start = true;
    }
    else {
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        start = false;
        clearInterval(t);
    }
});

document.getElementById("reset").addEventListener("click",()=>{
    document.getElementById("reset").style.transform = "rotate(360deg)";
    document.getElementById("reset").style.transition = "all 0.8s ease-in-out";
    clearInterval(t);
    seconds = 0;
    minutes = 0;
    hours = 0;
    days = 0;

    document.getElementById("days").value = "00";
    document.getElementById("hours").value = "00";
    document.getElementById("minutes").value = "00";
    document.getElementById("seconds").value = "00";

    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    start = false;
})