function lcm(a,b){
    var t=0;
    var r=0;
    
    var max=Math.max(a,b);

    for(let i=max;i<=a*b;i++){
        if(i%a==0 && i%b==0 ){
            r=i;
            break;
        }
    }
    return r;
}
console.log(lcm(100,15));