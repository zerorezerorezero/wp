function isPrime(n){
    let d=1;
    if(n==2)d=1;
    else for(let i=2;i<n;i++){
            if(n%i==0)d=0;
            if(d==0)break;
        }
    if(d==0)console.log(n," is not a prime number.");
    if(d==1)console.log(n," is a prime number.");
}
isPrime(13);