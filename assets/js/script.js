var character = document.getElementById("character");
var game = document.getElementById("game");
var ball = document.getElementById("ball");

var interval;

//Computer movement
function move() {
    var ballMove = document.getElementById("ball");
    var pos = 600;
    interval = setInterval(start, 5);

    var dir = 1;
    var pos = 0;

    function start() {
        if (pos > 400) dir = -1
        else if (pos < 0) dir = 1
        pos += dir
        ballMove.style.top = pos + 'px';
    }
}

function stop() {
    window.clearInterval(interval);
}


//Character move 10px on keydown
let moveBy = 10;

window.addEventListener('load', () => {
    character.style.position = 'absolute';
    character.style.left = 0;
    character.style.top = 0;
});
//Movement of character
window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            character.style.left = parseInt(character.style.left) - moveBy + 'px'; 
            break;
        case 'ArrowRight':
            character.style.left = parseInt(character.style.left) + moveBy + 'px'; 
            break;
        case 'ArrowUp':
            character.style.top = parseInt(character.style.top) - moveBy + 'px'; 
            break;
        case 'ArrowDown':
            character.style.top = parseInt(character.style.top) + moveBy + 'px'; 
            break;
    }
});