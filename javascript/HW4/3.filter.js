function filter(a,f){

    let r=[];

    for(let i=0;i<a.length;i++){
        if(f(a[i])===0)r.push(a[i]);
    }
    return r;
}

console.log(filter([2,4,6,8,10,12,14],function f(n){if(n%3==0)return 0;}));

//partial debugged with ChatGPT