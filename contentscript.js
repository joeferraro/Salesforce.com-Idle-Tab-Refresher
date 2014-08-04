var idleTime = 0;
var waitMinutes = 10;

$(document).ready(function () {
    chrome.storage.sync.get({
      minutes: 10,
    }, function(items) {
    	waitMinutes = items.minutes;

    	//Increment the idle time counter every minute.
    	var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
    });

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > waitMinutes) { 
        window.location.reload();
    }
}