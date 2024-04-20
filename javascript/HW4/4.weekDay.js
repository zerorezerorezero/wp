function weekDay(str){
    var mapping ={
        "Sunday":0,
        "Monday":1,
        "Tuesday":2,
        "Wednesday":3,
        "Thursday":4,
        "Friday":5,
        "Saturnday":6
    }
    return mapping[str];
}
console.log(weekDay("Sunday"));