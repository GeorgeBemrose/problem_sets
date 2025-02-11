function makeAnagram(a, b) {

    let totalCount = 0;
    const countMap = new Map();
    
    for(let i = 0; i < a.length; i++){
        countMap.set(a[i],(countMap.get(a[i]) || 0) + 1)
    }
    for(let j = 0; j < b.length; j++){
        countMap.set(b[j],(countMap.get(b[j]) || 0) - 1)
    }   

    for(const count of countMap.values()){
        totalCount += Math.abs(count);
    }

    return(totalCount)
}

console.log(makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'));

//Brute Force Solution
// function makeAnagram(a, b) {
//     //loop through, count each letter for each array
//     //compare the maps
//     //if not the same, add letter count to total count
//     //return count

//     let totalCount = 0;
//     const aMap = new Map();
//     const bMap = new Map();

//     for(let i = 0; i < a.length; i++){
//         aMap.set(a[i],(aMap.get(a[i]) || 0) + 1)

//     }
//     for(let j = 0; j < b.length; j++){
//         bMap.set(b[j],(bMap.get(b[j]) || 0) + 1)
//     }   

//     for(let [key,val] of aMap){
//         let temp = bMap.get(key);
        
//         if(temp === undefined && !bMap.has(key)) {
//             totalCount += val;
//         } else if (temp !== val){
//             // totalCount += Math.abs(temp - val);
//         }
//     }

//     for(let [key,val] of bMap){
//         let temp = aMap.get(key);
        
//         if(temp === undefined && !aMap.has(key)) {
//             totalCount += val;
//         } else if (temp !== val){
//             totalCount += Math.abs(temp - val);
//         }
//     }

//     return(totalCount)
// }