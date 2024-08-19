function CountBs(str){
    return CountChar(str,"B")
}

function CountChar(str, char){
    let count = 0
    for(let i = 0; i<str.length;i++){
        if (str[i] === char){
            count++
        }
    }
    return count
}

console.log(CountBs("BOB"));
// → 2
console.log(CountChar("kakkerlak", "k"));
// → 4