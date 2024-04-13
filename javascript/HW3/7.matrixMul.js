var r=[];
function matrixMul(a,b){
    if(a[0].length!=b.length){
        console.log("Invalid");
    }
    else if(a[0].length==b.length){
        r=new Array(a[0].length);
        for(let i=0;i< r.length;i++){
            r[i]=new Array(b.length).fill(0);
        }
        for(let i=0;i< a[0].length;i++){
            for(let j=0;j< b.length;j++){
                for(let k=i ;k< a[0].length;k++){
                    r[i][j] +=a[i][k]*b[k][j];
                }
            }
        }
    }
}
matrixMul([[1,2,3],[4,5,6],[7,8,9]],[[10,11,12],[13,14,15],[16,17,18]]);
console.log(r);
