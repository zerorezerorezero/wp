function vectorAdd(a,b){
    var s=[];
    if(a.length==b.length){
        for(let i=0; i<a.length;i++){
            s[i]=a[i]+b[i];
        }
    }
    return s;
}
var r=vectorAdd([1,2],[3,4]);
console.log(r);