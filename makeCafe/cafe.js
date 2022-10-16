// var order = document.getElementById("order");
const order = document.querySelector("#order");
// var menu = document.getElementById("menu").value;
const menu = document.querySelector("#order input");
// var making = document.getElementById("making");
const h2 = document.getElementById("h2");
let time = 60;
const making = document.querySelector("#making");
var menuComplete = document.getElementById("complete");
let flag = false;
order.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(menu.value);
    // making.innerText = menu.value +" (남은 시간 : ";
    // let menuValue = menu.value;
    // menu.value = "";
    // console.log(time);
    flag = true;
    if (time > 0 && flag==true) {
        var setinterval = setInterval(Timer, 1000);
    }
   
    if (time <= 0 ) {
        clearInterval(setinterval);
        // clearInterval(setinterval);
        flag = false;
        making.innerText = "";
        menu.value = "";
        time = 60;
    }
        
    
    
    
    // making.innerText +="초)";
}) 
function Timer() {
    making.innerText = menu.value +" 남은 시간 :"+`${time}`;
    time -= 1;
    
}
menuComplete.addEventListener('submit', function (e) {
    e.preventDefault();
})
// function getClock() {
//     time -= 1;
// }

h2.addEventListener('mouseover', function () {
    h2.innerText = "바리스타1 (주문 예상 소요시간 1분)\n";
})

h2.addEventListener('mouseleave', function () {
    h2.innerText="바리스타1\n"
})