var s=[0,0];

function vectorAdd(a,b){
    for(let i in a){
        s[i]=a[i]+b[i];
    }
}
vectorAdd([1,2],[3,4])
console.log(s);