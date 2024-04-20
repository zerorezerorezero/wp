var h=0.01;

function f(p){
    let x=p[0];
    let y=p[1];
    return x*x+y*y;
}

function df(f,p,k){
    var p1=p;
    p1[k]+=h;
    return (f(p1)-f(p))/h;
}

function grad(f,p){
    var gp=p;
    for (let k = 0; k < p.length; k++) {
        gp[k] = df(f, p, k);
    }
    return gp;
}
console.log(f,[1,3],0);
console.log(f([1,3]),1);
console.log(grad(f,[1,3]));