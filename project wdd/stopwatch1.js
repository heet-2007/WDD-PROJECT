window.onload = function() {
let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let msec = document.querySelector("#msec");

let inputCont = document.querySelector(".input-cont");
let reset = document.querySelector("#reset");
let hourValue = document.querySelector("#HV");
let minValue = document.querySelector("#MV");
let secValue = document.querySelector("#SV");
let msecValue = document.querySelector("#MSV");

let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let dhour=0;
let dmin=0;
let dsec=0;
let dmsec=0;
let timerId = null;
let rhour=0;
let rmin=0;
let rsec=0;
let rmsec=0;
maxclick = 1;
msecValue.value=99;
let resetcheck=true;
    function decrtime () {
        console.log("you are in the decrtime");
        console.log(dhour);
        console.log(dmin);
        console.log(dsec);
        console.log(dmsec);

        
        
        if(dmsec > 0){
           dmsec--; 
        }
         else if(dsec > 0){
            // dsec = 59;
             dsec-- ;
             dmsec = 99;
            // secValue.innerHTML = (dsec < 10 ? "0" : "") + dsec;
        }
            else if(dmin > 0 ){
                dmin--;
                dsec = 59;
                dmsec = 99;
            // dhour--;
            // minValue.innerHTML = (dmin < 10 ? "0" : "") + dmin;
            }
            else if(dhour > 0){
                dhour--;
                dmin=59;
                dsec=59;
                dmsec = 99;
            }
            else if(dhour==0 && dmin==0 && dsec==0 && dmsec==0) {
                clearInterval(timerId);
                timerId = null;
                alert("times up");
            }
             
                console.log(`${dhour},${dmin},${dsec},${dmsec}`);
               
                
                
            hour.innerHTML =  dhour;
            min.innerHTML =  dmin;
            sec.innerHTML =  dsec;
            msec.innerHTML =  dmsec;

            hour.innerHTML = (dhour < 10 ? "0" : "") + dhour;
            min.innerHTML = (dmin < 10 ? "0" : "") + dmin;
            sec.innerHTML = (dsec < 10 ? "0" : "") + dsec;
            msec.innerHTML = (dmsec < 10 ? "0" : "") + dmsec;
            
            hourValue.value = hour.innerHTML;
            minValue.value = min.innerHTML;
            secValue.value = sec.innerHTML;
            msecValue.value = msec.innerHTML;

        }    
function showElement() {
    inputCont.style.display = "flex";
}

function hideElement() {
    inputCont.style.display = "none";
}

hour.addEventListener("click",() => {
    clearInterval(timerId);
    if(maxclick == 1){
    showElement();
    hourValue.focus();
    }
    timerId = null;
});
min.addEventListener("click",() => {
    clearInterval(timerId);
    showElement();
    minValue.focus();
    resetcheck = true;
    timerId = null;
});
sec.addEventListener("click",() => {

    clearInterval(timerId);
    showElement();
    secValue.focus();
    timerId = null;
});


startBtn.addEventListener("click",() => {
    
    if(hourValue.value == "" && minValue.value == "" && secValue.value == "" && msecValue.value == 99){
        hourValue.value = "" , minValue.value = "" ,  secValue.value = "", msecValue.value = 99;
    // showElement();

    }    
   else{
    hour.innerHTML = "";
    hour.innerHTML = hourValue.value;
    dhour = parseInt(hourValue.value) || 0;
    console.log(dhour);

    min.innerHTML = "";
    min.innerHTML = minValue.value;
    dmin = parseInt(minValue.value) || 0;
    console.log(dmin);

    sec.innerHTML = "";
    sec.innerHTML = secValue.value;
    dsec = parseInt(secValue.value) || 0;  
    console.log(dsec);

    msec.innerHTML = "";
    msec.innerHTML = msecValue.value;
    dmsec = parseInt(msecValue.value) || 0;  
    console.log(dmsec);

    if(resetcheck){
    rhour = dhour;
    rmin = dmin;
    rsec = dsec;
    rmsec = dmsec;
    resetcheck = false;
    }

    console.log(rhour,"rhour");
    console.log(rmin,"rmin");
    console.log(rsec,"rsec");
    console.log(rmsec,"rmsec");

            hour.innerHTML = (dhour < 10 ? "0" : "") + dhour;
            min.innerHTML = (dmin < 10 ? "0" : "") + dmin;
            sec.innerHTML = (dsec < 10 ? "0" : "") + dsec;
            msec.innerHTML = (dmsec < 10 ? "0" : "") + dmsec;
            
    hideElement();
    if(timerId === null){
        timerId = setInterval(decrtime,10); 
           }
   }
        });     


reset.addEventListener("click",() => {
    clearInterval(timerId);
    
    hour.innerHTML = rhour;
    min.innerHTML = rmin;
    sec.innerHTML = rsec;
    msec.innerHTML = rmsec;

if(rhour==0 && rmin==0 && rsec==0){
    hourValue.value = null;
    minValue.value = null;
    secValue.value = null;

}
else{
    hourValue.value = rhour;
    minValue.value = rmin;
    secValue.value = rsec;
    msecValue.value = rmsec;
}
    hour.innerHTML = (rhour < 10 ? "0" : "") + rhour;
    min.innerHTML = (rmin < 10 ? "0" : "") + rmin;
    sec.innerHTML = (rsec < 10 ? "0" : "") + rsec;
    msec.innerHTML = (rmsec < 10 ? "0" : "") + rmsec;
    resetcheck = true;
    timerId = null;
});
stopBtn.addEventListener("click",() => {
  
    clearInterval(timerId);
    timerId = null;

});

}
