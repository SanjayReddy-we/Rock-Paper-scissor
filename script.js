let userSore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const para=document.getElementById("msg");
const generate=()=>{
    const op=["rock","paper","scissor"];
    const compchoice=op[Math.floor(Math.random()*3)];
    return compchoice;
}
const draw=()=>{
    para.innerText="Draw";

}
const showwinner=(userwin)=>{
    if(userwin){
        para.innerText="You Won";

    }else{
        para.innerText="You Lose";
    }
}
const playgame=(userchoice)=>{
    if(userchoice===generate()){
        draw();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=generate()==="paper"?false:true;
        }else if(user==="paper"){
            userwin=generate()==="scissor"?false:true;
        }else{
            userwin=generate()==="rock"?false:true;
        }
        showwinner(userwin);

    }


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);


    })
});