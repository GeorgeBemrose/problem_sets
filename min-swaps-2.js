function minimumSwaps(arr) {
    let n = arr.length;
    let temp = 0;
    let count = 0;

    let i = 0
    while (i < n - 1){
        if(arr[i] == (i + 1)){
            i++
            continue;
        }
        temp = arr[arr[i]-1]
        arr[arr[i]-1] = arr[i]
        arr[i] = temp
        count++
    }

    return count;

}

// console.log(minimumSwaps([4,3,1,2]))
console.log(minimumSwaps([1,3,5,2,4,6,7]))