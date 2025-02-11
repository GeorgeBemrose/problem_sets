function twoStrings(s1, s2) {
    // let smallest = "";
    // let largest = "";
    // if (s1.length > s2.length){
    //     smallest = s2;
    //     largest = s1;
    // } else {
    //     smallest = s1;
    //     largest = s2;
    // }

    // const set = new Set();
    // for (const char of smallest){
    //     set.add(char);   
    // }


    
    // for (const char of largest){
    //     if(set.has(char)){
    //         return "YES";
    //     }
        
    // }



    const charMap = new Map();

    for (const char of s1){
        charMap.set(char,1);
    }

    for (const char of s2){
        if(charMap.has(char)){
            return "YES";
        }
    }
    return "NO";
}

console.log(twoStrings("and","art"))