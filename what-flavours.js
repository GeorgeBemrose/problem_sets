function whatFlavors(cost, money) {

    let n = cost.length;
    const values = new Map();

    for(let i = 0; i < n - 1; i++){
        let complement = money - cost[i];

        if(values.has(complement)){
            console.log((values.get(complement)+1) + ' ' + (i + 1));
            return;
        } else {
            values.set(cost[i],i)
        }
    }
}

whatFlavors([2,1,3,5,6],5);

//Brute Force (On^2) time complexity
// function whatFlavors(cost, money) {

//     let n = cost.length;

//     for(let i = 0; i < n - 1; i++){
//         for(let j = i + 1; j < n; j++){
//             if(cost[i]+cost[j] === money){
//                 console.log((i+1)+ " " + (j+1));
//                 return;
//             }
//         }
//     }
// }