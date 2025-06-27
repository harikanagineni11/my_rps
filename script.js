function computerPick() {
    const move=Math.random();
    let comMove='';
    if(move>=0 && move<1/3) {
        comMove='rock';
    }
    else if( move>=1/3 && move<2/3) {
        comMove='paper';
    } else if(move>=2/3 && move<1) {
        comMove='scissor';
    }
    return comMove;
}
const userMove=document.querySelector(".umove");
const compMove=document.querySelector(".cmove");
const pMove=document.querySelector(".ans");
let bttn1=document.querySelector(".btn1");

bttn1.addEventListener("click",function(){
    var computerMove=computerPick();
    var playerMove='rock';
    userMove.innerText=playerMove;
    if(computerMove==='rock') {
        compMove.innerText=`${computerMove}`;
        pMove.innerText='Tie 🤝';
        
    }
    else if(computerMove==='paper') {
        
        compMove.innerText=`${computerMove}`;
        pMove.innerText='You Loose 😩';
        
    }
    else if(computerMove==='scissor') {
        compMove.innerText=`${computerMove}`;
        pMove.innerText='You Win 🏆';
        
    }
})

let bttn2=document.querySelector(".btn2");
bttn2.addEventListener("click",function(){
    var computerMove=computerPick();
    var playerMove='paper';
    userMove.innerText=playerMove;
    if(computerMove==='rock') {
        
        compMove.innerText=`${computerMove}`;
        pMove.innerText='You Win 🏆';
        
    }
    else if(computerMove==='paper') {
        compMove.innerText=`${computerMove}`;
        pMove.innerText='Tie 🤝';
        
    }
    else if(computerMove==='scissor') {
        compMove.innerText=`${computerMove}`;
        pMove.innerText='You Loose 😩';
        
    }
})

let bttn3=document.querySelector(".btn3");
bttn3.addEventListener("click",function(){
    var computerMove=computerPick();
    var playerMove='scissor';
    userMove.innerText=playerMove;
    if(computerMove==='rock') {
        compMove.innerText=`${computerMove}`;
        pMove.innerText='You Loose 😩';
        
    }
    else if(computerMove==='paper') {
        compMove.innerText=`${computerMove}`;
        pMove.innerText='You Win 🏆';
        
    }
    else if(computerMove==='scissor') {
        compMove.innerText=`${computerMove}`;
        pMove.innerText='Tie 🤝';
        
    }
})
