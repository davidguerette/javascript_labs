function checkAlarm(hour, minutes){
  var now = new Date();
  if (now.getHours() === hour && now.getMinutes() === minutes){
    console.log("Time to get up!")
  }
  else {
    setInterval(function(){ checkAlarm(hour, minutes), 60000})
  }
}

var wakeUpHour = 7;
var wakeUpMinutes = 30;

setInterval(function(){checkAlarm(wakeUpHour, wakeUpMinutes); }, 60000)
