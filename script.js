const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");


function run_clock(){
  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();


  let hrRotation = hr*30 +90;
  let minRotation = min*6 +90;
  let secRotation = sec *6 +90;


  hours.style.transform = "rotate(" + hrRotation + "deg)";
  minutes.style.transform = "rotate(" + minRotation + "deg)";
  seconds.style.transform = "rotate(" + secRotation + "deg)";
}


var interval = setInterval(run_clock, 1000);
