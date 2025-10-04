const choices = document.querySelectorAll(".choice") ;
const userscore = document.querySelector("#user") ;
const compscore = document.querySelector("#comp") ;
const msg = document.querySelector("#msg") ;
const newgame = document.querySelector(".newgame") ;
const gaincompchoice = () => {
    const options = ["stone","paper","scissors"] ;
    const randIdx = Math.floor(Math.random()*3) ;
    return options[randIdx] ;
};
const playgame = (userchoice) => {
    const compchoice = gaincompchoice() ;
    console.log(compchoice);
    if(compchoice == userchoice) {
        msg.innerText = "Draw game... Play Again..." ;
    }
    else if(compchoice == "stone" && userchoice == "scissors") {
        msg.innerText = "Bot Win... Play Again" ;
        compscore.innerText++ ;
    }
    else if(compchoice == "paper" && userchoice == "stone") {
        msg.innerText = "Bot Win... Play Again" ;
        compscore.innerText++ ;
    } 
    else if(compchoice == "scissors" && userchoice == "paper") {
        msg.innerText = "Bot Win... Play Again" ;
        compscore.innerText++ ;
    }
    else {
        msg.innerText = "Congratulation!... You Win..." ;
        userscore.innerText++ ;
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id") ;
        playgame(userchoice) ;
    })

})
newgame.addEventListener("click", () => {
    compscore.innerText = 0 ;
    userscore.innerText = 0 ;
    msg.innerText = "Play Your Move!" ;
})
