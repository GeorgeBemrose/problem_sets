function plusMinus(arr) {
    let n = arr.length;

    let freq = new Map([["pos",0],["neg",0],["zero",0]]);
    for(let i = 0; i < n; i++){
        if(arr[i] > 0){
            freq.set("pos", (freq.has("pos") ? freq.get("pos") : 0) + 1);
        } else if(arr[i] < 0){
            freq.set("neg", (freq.has("neg") ? freq.get("neg") : 0) + 1);
        } else {
            freq.set("zero", (freq.has("zero") ? freq.get("zero") : 0) + 1);
        }
    }

    console.log(Number.parseFloat(freq.get("pos")/n).toFixed(6));
    console.log(Number.parseFloat(freq.get("neg")/n).toFixed(6));
    console.log(Number.parseFloat(freq.get("zero")/n).toFixed(6));

}

// plusMinus([1,1,0,-1,-1]);
plusMinus([1,-2,-7,9,1,-8,-5]);