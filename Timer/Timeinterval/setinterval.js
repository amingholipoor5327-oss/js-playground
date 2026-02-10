const lights = document.querySelectorAll(".light");
let Timer;
function clearLights() {
    lights.forEach(l => l.classList.remove("active"));
}

function startTraffic() {
    let index = 0;

     Timer = setInterval(() => {
        clearLights();
        lights[index].classList.add("active");
        index = (index + 1) % lights.length;
    }, 1500);
}
function Stop (){
 clearInterval(Timer)
}