let gameseq = [];
let userseq = [];
let h2 = document.querySelector("h2");
let colors = ["red","yellow","pink","green"];
let highscore = 0;

let started = false;
let level = 0;
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is started");
        started = true;
    }
    levelUp();
});
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },200);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);

}
function checkAns(idx){
    if(gameseq[idx] == userseq[idx]){
        if(gameseq.length == userseq.length){
                setTimeout(levelUp, 1000);
        }
    }else{
        if(level> highscore){
            highscore = level;
        }
        h2.innerHTML = `Game over! Your score was <b>${level}<b> <br>HighScore:${highscore} <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}
function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randmIndx = Math.floor(Math.random() * 3);
    let randmcolor = colors[randmIndx];
    let randmbtn = document.querySelector(`.${randmcolor}`);
    gameseq.push(randmcolor);
    console.log(gameseq);
    gameflash(randmbtn);
}
function btnpress(){
    console.log("button was clicked");
    let btn = this;
    userflash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}