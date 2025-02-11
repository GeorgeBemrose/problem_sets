function rotLeft(a, d) {
    
    const arrLengthIndex = a.length;
    let newArr = Array(arrLengthIndex).fill(0);

    for(let i = 0; i < arrLengthIndex; i++){
        let newPos = (i - d + arrLengthIndex) % arrLengthIndex; 
        newArr[newPos] = a[i];
    }
    return newArr;
}


console.log(rotLeft([1,2,3,4,5],4));