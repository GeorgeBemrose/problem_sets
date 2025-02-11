function diagonalDifference(arr) {
    // Write your code here
    let lRDiagonal = 0;
    let rLDiagonal = 0;
    const n = arr.length;
    
    for(let i = 0; i < n; i++){
        lRDiagonal += arr[i][i];
        rLDiagonal += arr[n-1-i][i];
    }
    
    return Math.abs(lRDiagonal-rLDiagonal);
    
}

console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]))