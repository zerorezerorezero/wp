const c=document.getElementById("Kugel");
    const ctx=c.getContext("2d");

    //黑桃
    var x=400;
    var y=400;

    ctx.beginPath();
    ctx.moveTo(x-20, y);
    ctx.bezierCurveTo(x-250, y+100, x-200, y-100,x,y-300);
    //ctx.stroke();

    //ctx.beginPath();
    ctx.bezierCurveTo(x+250,y-100,x+200,y+100,x+20,y);
    //ctx.stroke();

    //ctx.beginPath();
    ctx.quadraticCurveTo(x,y+50,x+50,y+150);
    //ctx.stroke();

    //ctx.beginPath();
    ctx.lineTo(x-50,y+150);
    //ctx.stroke();

    //ctx.beginPath();
    ctx.quadraticCurveTo(x,y+50,x-20,y);
    ctx.fillStyle="#505050"
    ctx.fill();
    ctx.stroke();

    //紅心
    x=900
    y=200

    ctx.beginPath();
    ctx.arc(x-100,y,100,0.8*Math.PI,0);
    ctx.arc(x+100,y,100,1*Math.PI,0.2*Math.PI);
    
    ctx.lineTo(x,y+300);
    ctx.lineTo(x-181,y+57);
    ctx.fillStyle="#F06060"
    ctx.fill();
    ctx.stroke();

    //菱形
    x=400
    y=850

    ctx.beginPath();
    ctx.moveTo(x,y-200)
    ctx.lineTo(x+160,y)
    ctx.lineTo(x,y+200)
    ctx.lineTo(x-160,y)
    ctx.lineTo(x,y-200)
    ctx.stroke();
    ctx.fillStyle="#F06060"
    ctx.fill();

    //梅花
    x=900
    y=900

    ctx.beginPath()
    ctx.arc(x-120,y-20,100,0.1*Math.PI,1.6*Math.PI);
    ctx.arc(x,y-170,100,0.8*Math.PI,0.2*Math.PI);
    ctx.arc(x+120,y-20,100,1.4*Math.PI,0.9*Math.PI);
    ctx.quadraticCurveTo(x,y+60,x+50,y+160);
    ctx.lineTo(x-50,y+160);
    ctx.quadraticCurveTo(x,y+60,x-25,y+10);
    ctx.fillStyle="#505050"
    ctx.fill();
    ctx.stroke();











