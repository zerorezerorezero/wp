function isPrime(n){
    var s="";
    for(var i=2;i<n;i++){
        let d=1;
        if(n==2)d=1;
        else for(let c=2;c<i;c++){
                if(i%c==0)d=0;
                if(d==0)break;
            }
        if(d==1)s+=i+" ";
    }
    console.log(s);
}
isPrime(97);