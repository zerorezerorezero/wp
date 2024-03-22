function arrayMin(a){
    let min=a[0];
    for(let i=0;i<=a.length;i++){
        if(a[i]<min)min=a[i];
    }
    return min;
}
console.log(arrayMin([12,23,40,1,95,3]));