// define var to hold time values
let seconds = 0;
let hours = 0;
let minutes = 0;

// define vars to hold "display" values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0 ;

// define var to hold setInterval function
let interval = null;

// define var to hold stopwatch status
let status = "stopped";

// stopwatch function(logic to determine when to incrementnext value)
function stopWatch(){
    seconds++;

    // logic to determine when to increment next value
    if (seconds/60 == 1) {
        seconds =0;
        minutes++;

        if (minutes/60 == 1) {
            minutes = 0;
            hours++;
        }
    }
    // if seconds/hours/minutes is only one digit then add a leasing zero
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    if (hours<10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }
    // display updated time values to users
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes +":" + displaySeconds;
}

// function to start/stop of stopwatch
function startStop() {
    if(status === "stopped"){
        
        // start the stopwatch by calling setInterval function
        interval = window.setInterval(stopWatch,1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

// function to reset stopwatch
function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00"
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
}