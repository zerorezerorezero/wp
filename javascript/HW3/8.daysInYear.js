let n;
function daysInyear(n){
    if(n%4==0){
        if(n%100==0){
            if(n%400==0){
                return 366;
            }
            else {
                return 365;
            }
        }
        else {
            return 365;
        }
    }
    else{
        return 365;
    }
}
let y=2000;
let d=daysInyear(y);
console.log("There're " , daysInyear(y) ," days in ",y);