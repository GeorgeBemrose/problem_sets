function minimumBribes(q) {
  // Write your code here
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    let count = q[i] - (i + 1);
    if (count > 2) {
      return "Too chaotic";
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
        if(q[j] > q[i]){
            bribes++
        }
      
    }
  }
  return bribes;
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
// console.log(minimumBribes([5,1,2,3,7,8,6,4]))
