function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      //setInerval (function(),seconds)
      //we are currently defining a function that moves hands
      //innerHTML?

secHand = document.querySelector("#seconds").style //select seconds hand
minuteHand = document.querySelector("#minutes").style //select minutes hand
hourHand = document.querySelector("#hour").style //select hour hand
var deg

function getHourAngle(time){
    time = time % 60
    return({time}+180)*360
}
function getMinuteAngle(time){
    time = time % 3600;
    return({time}+180) +360
}
function getSecondAngle(time){
    time % 43200
    return({time}+180 *360)
}

// time %= 43200

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    
    // hourHand.transform = `rotate(${getHourAngle{time}})`
    // minuteHandHand.transform = `rotate(${getminuteAngle{time}})`
    // secHand.transform = `rotate(${getSecondAngle{time}})`
    
    // your code here
}, 1000);
