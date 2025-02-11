function repeatedString(s, n) {
    // Write your code here
    if(s.length === 1 && s[0] === 'a'){
        return n;
    }
    let numA = 0;
    let remainder = (n % s.length)
    let subArr = s.slice(0,remainder);
    
    if(subArr.length > 0){
        numA += countAs(subArr);
    }
    numA += countAs(s)*(Math.floor(n/(s.length)));
    
    return numA;
    

}

function countAs(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "a"){
            count++;
        }
    }
    return count; 
}

console.log(repeatedString("aba",10))