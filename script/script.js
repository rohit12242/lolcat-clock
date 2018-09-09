var noon=12;
var evening=18;
var wakeup=6;
var lunchtime=12;
var naptime=14;
var partytime=17;
var button = 0;
var onesecond=1000;

var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var napTimeSelector  =  document.getElementById('napTimeSelector');
var partyTimeButton =  document.getElementById('partyTimeButton');

var wakeUpEvent = function()
{
  wakeup= wakeUpTimeSelector.value;
};
var lunchEvent = function()
{
  lunchtime= lunchTimeSelector.value;
};
var napEvent = function()
{
  naptime = napTimeSelector.value;
};
var partyEvent = function()
{
  if (button == 0)
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over";
        partyTimeButton.style.background = "#0A8DAB";
        button = 1;
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.background = "#222";
        button=0;
    }
};

var showCurrentTime = function()
{
  var clock = document.getElementById('clock');
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM" ;
  if(seconds<10){
    seconds = "0"+seconds;
  }
  if(hours>12){
    hours = hours-12;
    meridian="PM";
  }

  var clockTime = hours+":"+minutes+":"+seconds+" "+meridian+"!";
  clock.innerText = clockTime;
};
//showCurrentTime();
var updateClock = function()
{
  var messageText;
  var lolcatImage = document.getElementById('lolcat');
  var image = "./images/img1.jpg";

  var time = new Date().getHours();
  var timeEventJs = document.getElementById('timeEvent');

  if (time < noon)
   {
     messageText = "Top of the morning to ya";
     image = "./images/img2.jpg";
   }
   else if (time >= evening)
   {
     messageText = "Good evening, mate!";
     image = "./images/img3.jpeg";
   }
   else
   {
     messageText = "Good afternoon, mate";
     image = "./images/img4.jpg";
   }


   if (time == wakeup) {
     messageText = "Time to wake up, sleepyhead";
   }
   else if (time == lunchtime) {
     messageText = "Crack open that lunchbox! It's time to eat!";
   }
   else if (time == naptime) {
     messageText = "Time for a powernap!";
     image = "./images/img5.jpg";
   }
   else if (time == partytime) {
     messageText = "Hang up your hard hat! It's time to P A R T Y";
     image = "./images/img5.jpg";
   };

   lolcatImage.src=image;
   timeEventJs.innerText = messageText;

  showCurrentTime();
};
updateClock();
setInterval(updateClock,onesecond);
partyTimeButton.addEventListener('click',partyEvent);
wakeUpTimeSelector.addEventListener('change',wakeUpEvent);
lunchTimeSelector.addEventListener('change',lunchEvent);
napTimeSelector.addEventListener('change',napEvent);
