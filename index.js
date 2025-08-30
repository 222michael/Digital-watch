let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");



function updateClock() {
    let currentTime = new Date();
    hour.innerHTML = String(currentTime.getHours()).padStart(2, '0');
    minute.innerHTML = String(currentTime.getMinutes()).padStart(2, '0');
    second.innerHTML = String(currentTime.getSeconds()).padStart(2, '0');
}
setInterval(updateClock, 1000);
updateClock(); 