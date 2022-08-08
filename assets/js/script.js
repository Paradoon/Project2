var character = document.getElementById("character");
var game = document.getElementById("game");
var ball = document.getElementById("ball");


//Character move 10px on keydown
let moveBy = 10;

window.addEventListener('load', () => {
    character.style.position = 'absolute';
    character.style.left = 0;
    character.style.top = 0;
});

function runBall() {
    setInterval(() => {
        const ball = document.getElementById("ball");
        // console.log('Here')
        const currentPosition = parseInt(ball.style.left || 0)
        ball.style.left = (currentPosition + 10)%280 + 'px';
    },50)
}

// function checkForCrash() {
//     ball = document.getElementById("ball");
//     if(ball.style.left === character.style.left && ball.style.top === character.style.top) {
//         console.log('Crash')
//         return true;
//     }

//     return false;

// }
//Movement of character
window.addEventListener('keydown', (e) => {
    
    switch(e.key) {
        case 'ArrowLeft':
            // Check obstacle, if obstacle present, then don't change the position
            if(ball.style.left === parseInt(character.style.left) - moveBy + 'px') {
                console.log('Crash')
            }
            character.style.left = parseInt(character.style.left) - moveBy + 'px'; 
            break;
        case 'ArrowRight':
            // Check obstacle, if obstacle present, then don't change the position
            if(ball.style.left === parseInt(character.style.left) + moveBy + 'px') {
                console.log('Crash')
            }
            character.style.left = parseInt(character.style.left) + moveBy + 'px'; 
            break;
        case 'ArrowUp':
            // Check obstacle, if obstacle present, then don't change the position
            if(ball.style.top === parseInt(character.style.top) - moveBy + 'px') {
                console.log('Crash')
            }
            character.style.top = parseInt(character.style.top) - moveBy + 'px'; 
            break;
        case 'ArrowDown':
            // Check obstacle, if obstacle present, then don't change the position
            if(ball.style.top === parseInt(character.style.top) + moveBy + 'px') {
                console.log('Crash')
            }
            character.style.top = parseInt(character.style.top) + moveBy + 'px'; 
            break;
    }
});

runBall();