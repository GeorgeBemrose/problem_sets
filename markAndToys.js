function maximumToys(prices, k) {
    let toys = 0;
    let n = prices.length;
    let bal = k;

    for(let i = 0; i < n; i++){
        let minIndex = i;

        for(let j = i + 1; j < n; j++){
            if(prices[j] < prices[minIndex]){
                minIndex = j;
            }
        }
        let temp = prices[i];
        prices[i] = prices[minIndex];
        prices[minIndex] = temp;
        
        if(prices[i] <= bal){
            bal -= prices[i];
            toys++
        } else {
            break;
        }
    }
    return toys;
}

console.log(maximumToys([1,12,5,111,200,1000,10],50))



// function maximumToys(prices, k) {
//     let toys = 0;
//     let n = prices.length;

//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n - i - 1; j++){
//             let temp = 0;
//             if(prices[j] > prices[j+1]){
//                 temp = prices[j];
//                 prices[j] = prices[j+1];
//                 prices[j+1] = temp;
//             }
//         }
//     }

//     let bal = k;
//     for(let l = 0; l < n; l++){
//         if(prices[l] < bal){
//             bal -= prices[l];
//             toys++
//         } else {
//             return toys;
//         }
//     }

//     return toys;
// }