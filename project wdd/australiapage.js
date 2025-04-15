let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");
let dateDisplay = document.getElementById("datedisplay");
let btn = document.querySelector(".btn");
let is24Hour = false;

function updateClock() { // for update time
    const now = new Date();
    const options = {
        timeZone:"Australia/Sydney",
        hour:"numeric",
        minute:"numeric",
        second:"numeric",
        hour12 : !is24Hour,
        weekday: "long",
        year:"numeric",
        month:"long",
        day:"numeric",
    };
const timeParts = new Intl.DateTimeFormat('en-US',options).formatToParts(now);
let hour = "", minute = "", second = "", ampmValue = "";
let weekday = "", month = "", day = "", year = "";

    timeParts.forEach(part => { 
        if(part.type === "hour")
            hour = part.value.padStart(2,'0');
        
        if(part.type === "minute")
            minute = part.value.padStart(2,'0');
        
        if(part.type === "second")
            second = part.value.padStart(2,'0');
        
        if(part.type === "dayPeriod")
            ampmValue = part.value;

        if(part.type === "weekday")
            weekday = part.value;

        if(part.type === "month")
            month = part.value;

        if(part.type === "day")
            day = part.value;

        if(part.type === "year")
            year = part.value;
        
    });
    hours.innerText = hour;
    minutes.innerText = minute;
    seconds.innerText = second;
    ampm.innerText = is24Hour ? "" : ampmValue;
    dateDisplay.innerText = `${month} ${day}, ${year} (${weekday})`;
}

btn.addEventListener("click",() => { // for toggling time
    is24Hour = !is24Hour;
    btn.innerText = is24Hour ? "switch to 12 hour" : "switch to 24 hour";
    updateClock();
});

updateClock();
setInterval(updateClock,1000);//for contnuous running time