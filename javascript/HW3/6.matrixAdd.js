var s=[[0],[0]];

function matrixAdd(a,b){
    for(let i in a){
        for(let j in a){
            s[i][j]=(a[i][j]+b[i][j]);
        }
    }
}
matrixAdd([[1,2],[3,4]],[[5,6],[7,8]]);
console.log(s);