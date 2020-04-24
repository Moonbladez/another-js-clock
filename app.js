var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".minute-hand");
var hourHand = document.querySelector(".hour-hand");
var setDate = function () {
    //date now
    var now = new Date();
    //seconds in current minute
    var seconds = now.getSeconds();
    //current seconds dvidied by 60 multiple by 360deg. exp 0 seconds / 60 = 0 * 360 = hand at 360 degrees. + 90 to offset 90 we added in css
    var secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = "rotate(" + secondsDegrees + "deg)";
    var minutes = now.getMinutes();
    var minuteDegrees = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)";
    var hour = now.getHours();
    var hourDegrees = (hour / 12) * 360 + 90;
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)";
};
setInterval(setDate, 1000);
