function matrixAdd(a,b){
    var s=[];

    if(a[0].length==b[0].length&&a.length==b.length){
        for(let i=0; i<a[0].length;i++){
            s[i]=[];
            for(let j=0; j<a.length;j++){
                s[i][j]=(a[i][j]+b[i][j]);
            }
        }
    }
    return s;
}
var r=matrixAdd([[1,2,3],[4,5,6],[7,8,9]],[[10,11,12],[13,14,15],[16,17,18]]);
console.log(r);