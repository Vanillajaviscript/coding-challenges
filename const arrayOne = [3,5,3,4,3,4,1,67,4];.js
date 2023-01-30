const arrayOne = [3,5,3,4,3,4,1,67,4];
const arrayTwo = [23,45,45,34,5];

const addTwoArrays = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])].reduce((a, b) => a + b, 0);
  //   let setArray = [...new Set(arr1), ...new Set(arr2)];
  //   let newSet = [...new Set(setArray)]
  // console.log(newSet);
  // let sum = 0;
  //   for(let i = 0; i < newSet.length; i++) {
  //     sum += newSet[i]
  //   }

  //   return sum
};

console.log(addTwoArrays(arrayOne, arrayTwo))


