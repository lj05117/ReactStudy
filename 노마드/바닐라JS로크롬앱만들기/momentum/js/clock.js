const clock = document.querySelector("h2#clock");

function sayClock() {
    const date = new Date();
    // console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
    clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}
sayClock();
setInterval(sayClock, 1000);