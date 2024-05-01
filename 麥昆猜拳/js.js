var goal=10;
        var Pscore=0;
        var Cscore=0;
        var Ps=document.getElementById("PS");
        var Cs=document.getElementById("CS");
        var PP=document.getElementById("PPic");
        var CP=document.getElementById("CPic");
        var BS=document.getElementById("Scissors");
        var BR=document.getElementById("Rock");
        var BP=document.getElementById("Paper");

        function c(evn){
            var button =evn.id;
            var CPU=0;
            var PLR=0;

            switch (button){
                case "Scissors":
                    PLR=0; break;
                case "Rock":
                    PLR=1; break;
                case "Paper":
                    PLR=2; break;
            }

            CPU=Math.floor(Math.random()*3);

            PicSet(PLR,CPU);

            var title=document.getElementById("title");
            if(CPU==PLR){
                title.innerText="平手";
            }
            else if(PLR-CPU==1||PLR-CPU==-2){
                title.innerText="勝";
                Pscore++;
            }
            else {
                title.innerText="敗";
                Cscore++;
            }

            Ps.innerText=Pscore.toString();
            Cs.innerText=Cscore.toString();

            if(Pscore==goal||Cscore==goal){
                if(Pscore>Cscore){
                    title.innerText="你贏了!"
                    PP.src="SQwin.png";
                    CP.src="WQlose.png";

                }
                else {
                    title.innerText="你輸了......"
                    PP.src="SQlose.png";
                    CP.src="WQwin.png";
                }

                BS.disabled=true;
                BR.disabled=true;
                BP.disabled=true;
            }
        }

        function PicSet(p,c){
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

        function reset(){
            title.innerText="你是目白麥昆[漣漪窈窕淑女]，打敗目白麥昆[空之盡頭]即獲勝。(先取得10分)";
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

