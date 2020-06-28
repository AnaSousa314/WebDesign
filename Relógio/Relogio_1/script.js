
function clock(){
var hours = document.getElementById('hour'); //cria uma variavel para receber o elemento 'hour' do relogio.html
var minutes = document.getElementById('minutes');//cria uma variavel para receber o elemento 'minutes' do relogio.html
var seconds = document.getElementById('seconds');//cria uma variavel para receber o elemento 'seconds' do relogio.html

var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);

/*
var button = document.getElementById("btn");


button.addEventListener("click",function(){
    document.getElementById('oi').textContent = "Date"
    document.getElementById('oi').ontoggle(removeEventListener)
})

*/