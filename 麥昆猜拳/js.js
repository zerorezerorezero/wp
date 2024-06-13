// Declaring variables
let goal=5;
let Pscore=0;
let Cscore=0;
let Ps=document.getElementById("PS");
let Cs=document.getElementById("CS");
let PP=document.getElementById("PPic");
let CP=document.getElementById("CPic");
let BS=document.getElementById("Scissors");
let BR=document.getElementById("Rock");
let BP=document.getElementById("Paper");
let BReset=document.getElementById("BRst");
let button;
let title=document.getElementById("title");
let CPU=0;
let PLR=0;
let evn;

function c(evn){ // Main clicking event
    button =evn.id;
    PP.src="SL.png";
    CP.src="WL.png";
    title.innerText="..."

    BS.disabled=true;
    BR.disabled=true;
    BP.disabled=true;
    BReset.disabled=true;

    setTimeout(R,1000);
}

function PicSet(p,c){ // Setting pictures
    switch (p){
        case 0: 
            PP.src="SS.png";break;
        case 1:
            PP.src="SR.png";break;
        case 2:
            PP.src="SP.png";break;
    }

    switch (c){
        case 0: 
            CP.src="WS.png";break;
        case 1:
            CP.src="WR.png";break;
        case 2:
            CP.src="WP.png";break;
    }
}

function reset(){ // Reset everything
    title.innerText="你是目白麥昆[漣漪窈窕淑女]，打敗目白麥昆[空之盡頭]即獲勝。(先取得5分)";
    CPU=0;
    PLR=0;
    Pscore=0;
    Cscore=0;
    Ps.innerText=Pscore.toString();
    Cs.innerText=Cscore.toString();
    PP.src="Q.png";
    CP.src="Q.png";
    BS.disabled=false;
    BR.disabled=false;
    BP.disabled=false;
}

function R(){ // Show result
    switch (button){ // Distinguish witch button was clicked
        case "Scissors":
            PLR=0; break;
        case "Rock":
            PLR=1; break;
        case "Paper":
            PLR=2; break;
    }

    CPU=Math.floor(Math.random()*3); // Generate CPU's reaction

    PicSet(PLR,CPU); // Send Player and CPU's answer to PicSet to set pictures 

    if(CPU==PLR){ // Distinguish the situation
        title.innerText="平手";
    }
    else if(PLR-CPU==1||PLR-CPU==-2){ // Ex: Player: Rock(1), CPU: Scissors(0). Or: Player: Scissors(0), CPU:Paper (2).
        title.innerText="勝";
        Pscore++;
    }
    else {
        title.innerText="敗";
        Cscore++;
    }

    Ps.innerText=Pscore.toString(); // Loading result of score to the page
    Cs.innerText=Cscore.toString();

    BS.disabled=false; // Buttons is ENABLE to be clicked again
    BR.disabled=false;
    BP.disabled=false;
    BReset.disabled=false;

    if(Pscore==goal||Cscore==goal){ //Game over
        BS.disabled=true;
        BR.disabled=true;
        BP.disabled=true;
        BReset.disabled=true;
        setTimeout(judge,3000);
    }
}

function judge() { //Show final result
    if (Pscore > Cscore) {
        title.innerText = "你贏了!";
        PP.src = "SQwin.png";
        CP.src = "WQlose.png";
    }
    else {
        title.innerText = "你輸了......";
        PP.src = "SQlose.png";
        CP.src = "WQwin.png";
    }
    BReset.disabled=false;
}