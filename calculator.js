let display=document.getElementById('display');
function add_to_display(x) {
    display.value = display.value + x;
}
function effacer() {
    display.style.removeProperty('background');
    display.style.removeProperty('color');
    display.value="";
}
function calcul() {
    try {
        display.value=eval(display.value);
    } catch (error) {
        display.value='error';
    }
}