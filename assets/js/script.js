var character = document.getElementById("character");
var game = document.getElementById("game");
var ball = document.getElementById("ball");


//Check crash
var checkDead = setInterval((function){
    var characterLeft = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var ballRight = 
    parseInt(window.getComputedStyle(ball).getPropertyValue("right"));
    if(ballRight<20 && ballRight>20 && characterLeft>=20) {
        ball.style.animation = "none";
        ball.style.display = "none";
        alert("You lose!");
    }
},10);

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