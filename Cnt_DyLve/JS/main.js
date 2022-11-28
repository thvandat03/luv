const startDay = new Date("2022-07-29 00:00:00")
function clock(){
    var today = new Date()
    var Hours = today.getHours();
    var Minutes = today.getMinutes();
    var Seconds = today.getSeconds();
    var time = (Hours<10)?(Hours="0"+Hours):(Hours);
    (Minutes<10)?(Minutes="0"+Minutes):(Minutes);
    (Seconds<10)?(Seconds="0"+Seconds):(Seconds);
    document.querySelector('date').textContent = Math.floor((Math.floor(today - startDay) / 1000 ) / (24*60*60)) ;
    document.querySelector('.numHours').textContent = Hours;
    document.querySelector('.numMin').textContent = Minutes;
    document.querySelector('.numSec').textContent = Seconds;
    document.querySelector('date').textContent = "0";
    console.log(today)
}
setInterval(clock, 1000)
