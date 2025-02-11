function sherlockAndAnagrams(s) {
  // Write your code here

  //map of characters, if larger than 2, it's a pair
  // if there's more than one unique character then
  // [i:i+j], where j starts @ i+1

  //slices were right to think of
  //start with [0],[1] then [0],[2], then [0],[3]
  // then [1][2], then [1][3],
  //[2],[3]
  // this would be done using i,j for loop [0:0],[1:1] = [i:i],[j:j]

  //then we need to look larger than this, i.e. 
  //[0:1][1:2] = [i:i+1 +1][j:j+1 +1]
  //[0:1][2:3] = [i:i+1 +1][j +1:j+1 +2]
  //[1:2][2:3] = [i:i+1 +2][j +1:j+1 +2]

  //then [0:2][2:X] cannot do this as length is only 4 characters. up to pairs of 3?

  let count = 0;
  let freqMap = new Map();

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      let substring = s.slice(i, j);
      let sortedSubstring = substring.split('').sort().join('');

      freqMap.set(sortedSubstring, (freqMap.has(sortedSubstring) ? freqMap.get(sortedSubstring) : 0) + 1);
      
    }
  }



  freqMap.forEach((value) =>{
    if(value > 1){
        count += (value *(value-1))/2;
    }
  });

  return count;
}

console.log(sherlockAndAnagrams("mom"));
