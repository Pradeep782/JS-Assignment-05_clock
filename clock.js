"use strict";

// creating the function named $ that fetches the html element by using its id
const $ = function (id) {
    return document.getElementById(id);
};


// creating the displayCurrentTime function that gets the hour minute and seconds using the new Date object.
const displayCurrentTime = function () {
    const today = new Date();
    const hr = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();


    // using setInterval method that repeats the display currentTime function for every second.
    const time = setInterval(displayCurrentTime, 1000);



// changing the AM and PM by comparing the hr
    const ampm = "AM";
    if (hr > 12) {
        hr = hr - 12;
        ampm = "PM";
    }

    // using the DOM to insert the hr, min, sec in html 
    document.getElementById("hours").innerHTML = hr;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("ampm").innerHTML = ampm;

};



window.onload = function () {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it
    // won't be needed - clock will just run.
    displayCurrentTime();
};