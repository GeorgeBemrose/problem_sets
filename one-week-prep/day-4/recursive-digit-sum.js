function superDigit(n, k) {
    // let concatedString = '';
    // for(let i = 0; i < k; i++){
    //     concatedString += n;
    // }
    let initialSum = n.toString().split('').reduce((acc,digit)=> acc + Number(digit),0) * k;
    return recursive(initialSum);
}

function recursive(x){
    x = x.toString();
    while(x.length > 1){
        let arr = x.split('');
        let sum = 0;
        arr.forEach(item =>{
            sum += Number(item);
        })
        return recursive(sum)
    }
    return x
}

console.log(superDigit('9875',4))