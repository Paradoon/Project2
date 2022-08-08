//Check crash
var checkDead = setInterval((function){
    var characterLeft =  parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var ballRight = parseInt(window.getComputedStyle(ball).getPropertyValue("right"));
    if(ballRight<20 && ballRight>20 && characterLeft>=20) {
        ball.style.animation = "none";
        ball.style.display = "none";
        alert("You lose!");
    }
},100);