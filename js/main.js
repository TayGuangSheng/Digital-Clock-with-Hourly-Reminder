$(window).load(function(){
     $('.preloader').fadeOut('slow');
});

/* =Hourly Reminder  
-------------------------------------------------------------- */
function playSound() {
  const audio = document.getElementById('alertSound');
  audio.play();
}

function checkTime() {
  const now = new Date();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // If it's a multiple of 10 seconds
  if (minutes === 0 && seconds === 0) {
    playSound();
  }
}

// Check the time every second
setInterval(checkTime, 1000);

/* END ------------------------------------------------------- */

/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */

/* =Time 
-------------------------------------------------------------- */
setInterval(showTime, 1000);
 
// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = " AM";
 
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = " PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;
 
    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}
 
showTime();
/* END ------------------------------------------------------- */

/* =Hero Transition 
-------------------------------------------------------------- */

/* END ------------------------------------------------------- */
