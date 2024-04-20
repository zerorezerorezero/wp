function gcd(a,b){
    var t=0;
    var r=0;
    if(b>a){//使a設為較大數
        t=b;
        b=a;
        a=t;
    }

    for(let i=0;i<=b;i++){
        if(a%i==0&&b%i==0)r=i;
    }
    return r;
}
console.log(gcd(100,15));