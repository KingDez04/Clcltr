const btns = document.querySelectorAll('.btn');
const clear = document.getElementById('AC');
const del = document.getElementById('DE');
const equal = document.getElementById('equal');


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        display.value += btn.value;
    })
})

clear.addEventListener("click", () => {
    display.value = '';
})

del.addEventListener("click", () => {
    display.value = display.value.toString().slice(0, -1);
})

equal.addEventListener("click", () => {
    display.value = eval(display.value);
})