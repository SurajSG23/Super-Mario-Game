let mario = document.getElementsByClassName("mario")[0]
let mario2 = document.getElementsByClassName("mario2")[0]
let obs = document.getElementsByClassName("obsticle")[0]
let bird = document.getElementsByClassName("bird")[0]
let score2 = document.getElementsByClassName("score")[0]
let finalScore = document.getElementsByClassName("finalScore")[0]
let scoreBoard=document.getElementsByClassName("scoreBoard")[0]
let count = 0;
function jump() {
    if (mario2.classList[1] != "jump") {
        mario2.classList.add("jump");
        mario.style.opacity = '0'
        mario2.style.opacity = '1'
        setTimeout(function () {
            mario2.classList.remove("jump");
            mario.style.opacity = '1'
            mario2.style.opacity = '0'
            count++;
            score2.innerHTML = 'Score: ' + count;
        }, 700);
    }
}

let checkAlive = setInterval(function () {
    let marioTop = parseInt(window.getComputedStyle(mario2).getPropertyValue("top"));
    let obsLeft = parseInt(window.getComputedStyle(obs).getPropertyValue("left"));

    if (obsLeft > 40 && obsLeft < 140 && marioTop >= 188) {
        mario2.style.animationPlayState = "paused";
        mario.style.animationPlayState = "paused";
        obs.style.animationPlayState = "paused";
        bird.style.animationPlayState = "paused";
        finalScore.innerHTML='GAME OVER<br>'+'\t'+score2.innerHTML
        scoreBoard.style.zIndex = "1"
        score2.style.opacity='0';
        clearInterval(checkAlive);
    }
}, 10);

function replay(){
    window.location.reload();
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        jump();
    }
})