// two global variables
var secondsRemaining;
var intervalHandle;

function addZero(num){
	if (num < 10) {
        num = "0" + num;
    }
	return num;
}

function tick() {
	// get the actual time in milisecond since 1970/01/01
	now = new Date();
	
    // grab the h1
    var timeDisplay = document.getElementById("time");
	
	// interval between now and the exam day in milisecond
	miliSecondsRemaining = endDate.getTime() - now.getTime();
	
	// convert the interval to seconds
	secondsRemaining = Math.floor(miliSecondsRemaining/1000);
	
    // turn seconds into dd:hh:mm:ss
	var day = Math.floor(secondsRemaining / (60*60*24));
	var secDay = day * 60*60*24;
	var hour = Math.floor((secondsRemaining - secDay)/(60*60));
	var secHour = hour * 60*60;
    var min = Math.floor((secondsRemaining - (secDay + secHour))/60);
	var secMin = min * 60;
    var sec = secondsRemaining - (secDay + secHour + secMin);
    
	// add a leading zero (as a string value) if days, hours, minutes or secondes less than 10
	day = addZero(day);
	hour = addZero(hour);
	min = addZero(min);
	sec = addZero(sec);
	
    // concatenate with colon
    var message = day + "d:" + hour + "h:" + min + "m:" + sec;
    // now change the display
    timeDisplay.innerHTML = message;
    
    // stop if down to zero
    if (secondsRemaining === 0) {
        alert("Good luck");
        clearInterval(intervalHandle);
    }
    // subtract from seconds remaining
    secondsRemaining--;
}

function startCountdown() {
	// date of the national exam : 2017/05/02 08:00:00
	endDate = new Date(2017, 4, 2, 8, 0, 0);
	
	// launch it every second
    intervalHandle = setInterval(tick, 1000);
}

// as soon as the page is loaded...
window.onload =  function () {
	startCountdown();
};