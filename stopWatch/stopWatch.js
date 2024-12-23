const buttonStart = document.getElementById("start");
buttonStart.addEventListener("click", () => {
    let timeNow = 1;
    let minuteNow = 0;
    function timeEvent() {
        document.getElementById("seconds").innerHTML = timeNow;
        timeNow++;
        if(timeNow === 60) {
            timeNow = 0;
            minuteNow = 1;
            document.getElementById("minute").innerHTML = minuteNow;
            minuteNow++;
        }
        window.valTime = minuteNow + ":" + timeNow;
        window.second = timeNow;
        window.minute = minuteNow;
    };
    window.interval = setInterval(timeEvent, 1000);
})    

const buttonStop = document.getElementById("stop");
buttonStop.addEventListener("click", stopWatch);
function stopWatch() {
    clearInterval(interval);
}

const buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", resetWatch);
function resetWatch() {
    clearInterval(interval);
    second = 2;
    minute = 0;
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
}

const buttonContinue = document.getElementById("continue");
buttonContinue.addEventListener("click", () => {
    function continueTime() {
        document.getElementById("seconds").innerHTML = second - 1;
        second++;
        if(second === 60) {
            second = 0;
            minute = 1;
            document.getElementById("minute").innerHTML = minute;
            minute++;
        }
    }
    window.interval = setInterval(continueTime, 1000);
})

