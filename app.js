let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameButton=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerx playerY

const winPattrens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

let count=0;    

const resetGame=()=>{
    turnO=true;
    count=0;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

boxes.forEach((box,index)=> {
    box.addEventListener("click",()=>{
        count++;
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
        msg.innerText=`Congratulations,winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disabledBoxes();
}; 

const showDraw=()=>{
        msg.innerText=`Your Game is Draw`;
        msgContainer.classList.remove("hide");
        disabledBoxes();
};


const checkWinner=()=>{
    // for(let pattren of winPattrens){
    //     console.log(pattren[0],pattren[1],pattren[2]);
    //     console.log(boxes[pattren[0]].innerText,
    //                 boxes[pattren[1]].innerText,
    //                 boxes[pattren[2]].innerText);
    for(let pattren of winPattrens){
        let pos1Val=boxes[pattren[0]].innerText;
        let pos2Val=boxes[pattren[1]].innerText;
        let pos3Val=boxes[pattren[2]].innerText;
        if(pos1Val!=="" && pos2Val!=="" && pos3Val!==""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                return;
            }
        }
    }
    if(count===9){
            showDraw();
    }
};

newGameButton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);