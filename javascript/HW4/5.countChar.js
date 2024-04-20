function countChar(str){
    var cstr={};
    
    for(let i in str){
        var char=str[i];
        
        if(cstr[char]){
            cstr[char]++;
        }
        else {
            cstr[char]=1;
        }
    }
    return cstr;
}
console.log(countChar("addabeebceecahiad"));