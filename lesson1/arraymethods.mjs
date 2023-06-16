// map 
//  filter
// find
// findIndex
// some
// every
// reduce

export const nums = [1,100,10,15,7];
const doubleNum = nums.map((num)=>
     num * 2
);
console.log(doubleNum);

// demo filters

const oddNumbers = nums.filter((num)=>
      num % 2 === 1 
        
);
