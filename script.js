let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('.reset');
let winnerContainer=document.querySelector('.winner-text');
let winnerText=document.querySelector('#winner-text');

let turno=true;

const winPatterns=[

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
    box.innerText="";
    if(turno){
        box.innerText="O";
        turno=false;
        
    }
    else{
        box.innerText="X";
        turno=true;
    }
    box.disabled=true;
    checkWinner();

    });




});

const resetBtn=()=>{
    turno=true;
    btnEnable();

}



const btnDisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const btnEnable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
        winnerText.innerText='';
    }
}

const showWinner=(winner)=>{
    winnerText.innerText=`Congratulations the Winner is ${winner}`;
    btnDisable();
}

const checkWinner=()=>{

    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;



        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log("winner",pos1Val);

                showWinner(pos1Val);


            }
        }
        
    }

};
reset.addEventListener('click',()=>{
    resetBtn();});

