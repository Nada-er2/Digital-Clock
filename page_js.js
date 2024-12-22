let hrs = document.getElementById("hrs");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");

setInterval(() => {
    let currenttime = new Date();

    hrs.innerHTML = (currenttime.getHours() < 10 ? "0" : "") + currenttime.getHours();
    mins.innerHTML = (currenttime.getMinutes() < 10 ? "0" : "") + currenttime.getMinutes();
    secs.innerHTML = (currenttime.getSeconds()<10?"0":"")+currenttime.getSeconds() 

}, 1000);
