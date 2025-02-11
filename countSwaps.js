function countSwaps(a) {
    // Write your code here
    let swaps = 0;
    let n = a.length; 

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++){
            let temp = 0;
            if(a[j] > a[j+1]){
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                swaps++;
            }
        }
        
        
    }
    
    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n-1]}`);

}

countSwaps([4,2,3,1])