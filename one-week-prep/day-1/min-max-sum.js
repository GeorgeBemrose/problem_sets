function miniMaxSum(arr) {
    // Write your code here
    let min = Infinity;
    let max = -Infinity;
    let totalSum = 0;

    arr.forEach(element => {
        totalSum+= element;
    });

    for(let i = 0; i < arr.length; i++){
        let sum = totalSum - arr[i];
        if(sum > max){
            max = sum;
        }
        if(sum < min){
            min = sum;
        }
    }
    console.log(min + " " + max);
}

miniMaxSum([1,2,3,4,5]);