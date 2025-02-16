function palindromeIndex(s) {
    let index = -1;
    let n = s.length -1;
    let lPointer = 0;
    let rPointer = 0;
    if(n%2 ===0){
        lPointer = n/2;
        rPointer = n/2;
    }else{
        lPointer = Math.floor(n/2);
        rPointer = Math.floor(n/2)+1;
    }

    
    while(lPointer >= 0 && rPointer < s.length){
        if(s[lPointer] !== s[rPointer]){
            if(s[lPointer] !== s[rPointer-1]){
                index = lPointer;
            }else{
                index = rPointer;
            }
            
        }
        lPointer--;
        rPointer++;
    }
    return index;

}

//aaab
//aaaaaab