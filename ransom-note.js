function checkMagazine(magazine, note) {
    let magazineArr = magazine.split(" ");
    let noteArr = note.split(" ");

    if(magazineArr.length < noteArr.length){
        console.log("No")
        return
    }

    const freq = new Map();
    
    for(let j = 0; j < magazineArr.length; j++){
        freq.set(magazineArr[j],(freq.get(magazineArr[j]) || 0) + 1)
    }

    for(let i = 0; i < noteArr.length; i++){
        //if word in freq, then set minus 1 and then continue
        // if word not in freq, then console.log('No')
        if(!freq.has(noteArr[i]) || freq.get(noteArr[i]) === 0){
            console.log('No');
            return;
        } else {
            freq.set(noteArr[i],(freq.get(noteArr[i]) || 0) - 1)
        }
    }
    console.log('Yes');
}

// console.log(checkMagazine("give me one grand today night","give one grand today"))
// checkMagazine("give me one grand today night","give one grand today")
checkMagazine("two times three is not four","two times two is four")

//Brute force method
// function checkMagazine(magazine, note) {
//     let magazineArr = magazine.split(" ");
//     let noteArr = note.split(" ");
//     let possible = true;

//     if(magazineArr.length < noteArr.length){
//         console.log("No")
//         return
//     }

//     const freq = new Map();
//     for(let i = 0; i < noteArr.length; i++){
//         freq.set(noteArr[i],(freq.get(noteArr[i]) || 0) + 1)
//     }
//     for(let j = 0; j < magazineArr.length; j++){
//         freq.set(magazineArr[j],(freq.get(magazineArr[j]) || 0) - 1)
//     }

//     for(const value of freq.values()){
//         if(value > 0){
//             possible = false;
//             break;
//         }
//     }
    
//     if(possible){
//         console.log("Yes");
//     } else {
//         console.log("No")
//     }

// }