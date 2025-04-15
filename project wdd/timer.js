let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let msec = document.querySelector("#msec");
let stopBtn = document.querySelector("#stop");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");

msecond=0o0;
second=0o0;
minutes=0o0;
hours=0o0;

timerId = null;

function startTimer() {
    msecond++;
    // console.log(msec);
    // msec.innerHTML = (msec<10?"0":"") + msec;
   
    if(msecond == 100){
        msecond=0o0;
        second++;
    }
    // sec.innerHTML = (second<10?"0":"") + second;
    else if(second == 60){
        second=0o0;
        minutes++;
    }
        else if(minutes==60){
            minutes=0o0;
            hours++;
        }
        console.log(`${hours}, ${minutes}, ${second}, ${msecond}`)

        msec.innerHTML = (msecond<10?"0":"") + msecond;
        sec.innerHTML = (second<10?"0":"") + second;
        min.innerHTML = (minutes<10?"0":"") + minutes;
        hour.innerHTML = (hours<10?"0":"") + hours;
        //for display
        // msec.innerHTML = (currentTime.msec>10?"":"0") + currentTime.msec;

}

startBtn.addEventListener(("click"),() => {
    
    if(timerId === null){
        timerId = setInterval(startTimer,10);
    }
});


stopBtn.addEventListener(("click"),() => {
    clearInterval(timerId);
    timerId = null;
});
resetBtn.addEventListener(("click"),() => {
    clearInterval(timerId);
    msec.innerHTML = "00";
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hour.innerHTML = "00";
    msecond = second = minutes = hours = 0o0;
    timerId = null;
});

