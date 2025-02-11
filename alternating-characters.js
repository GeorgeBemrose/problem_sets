function alternatingCharacters(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i+1]){
            count++;
        }
    }
    return count;
}

console.log(alternatingCharacters("AAAA"))
console.log(alternatingCharacters("BBBBB"))
console.log(alternatingCharacters("ABABABAB"))
console.log(alternatingCharacters("BABABA"))
console.log(alternatingCharacters("AAABBB"))