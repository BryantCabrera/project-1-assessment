/*costants*/
let result;
let color;

/*app's state*/

/*cached elements*/
const input = document.getElementById('input');
const count = document.getElementById('count');
const controls = document.getElementById('controls');

/*functions*/
function init () {
    result = 0;
    render();
}

init();

function render () {
    count.textContent = result;
    count.style.color = color;
}

function calc (e) {
    if (e.target.id === 'plus') {
        result += parseInt(input.value);
    } else if (e.target.id === 'minus') {
        result -= parseInt(input.value);
    }

    color = (result >= 0) ? 'black' : 'red';
    render();
}

/*event listeners*/
controls.addEventListener('click', calc);