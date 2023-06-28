function hasTargetSum(array, target) {
  let compoundSum;
  for(let i=0; i<array.length; i++) {
    console.log(`Num: ${array[i]}`);
    for(let j=0;j<array.length; j++){
      console.log(`Num of array: ${array[j]}`);
      compoundSum = (array[i] + array[j])
     console.log(`compoundSum: ${compoundSum}`);
     if (compoundSum === target && i !== j) {
      return true
      
     }else if(compoundSum !== target){    
        continue
     }
    }
  }
  return false
}

let myArray = [3, 8, 12, 4, 11, 7]
hasTargetSum(myArray,10)




// function hasTargetSum(array, target) {
//   let compoundSum;
//   for(num of array) {
//     console.log(`Num: ${num}`);
//     for(let i=0;i<array.length; i++){
//       console.log(`Num of array: ${array[i]}`);
//       compoundSum = (num + array[i])
//      console.log(`compoundSum: ${compoundSum}`);
//      if (compoundSum === target && num !== array[i]) {
//       return true
      
//      }else if(compoundSum !== target){    
//         continue
//      }
//      else{
//       return false
//      }
     
//     }
//   }
// }

// let myArray = [4]
// hasTargetSum(myArray,4)



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
