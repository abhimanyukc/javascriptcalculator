let display = document.querySelector('.display');
function cal(val) {

    display.value += val;

}
function calculate(){
    display.value = eval(display.value);

}
function c(){
    display.value = "";
}

function Back(){
    display.value = display.value.slice(0,-1);
}
function root(){
    display.value = Math.sqrt(display.value);
}
