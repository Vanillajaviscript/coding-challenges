///////////////
//Find the sum of two arrays containing integers while removing any duplicates

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

/////////////////////
//Return true or false if there is a match between two arrays
/////////////////////
const array1 = ['a', 'b', 'c'];
const array2 = ['a', 'y', 'z'];

const commonItems = (arr1, arr2) => {
  // for(let i = 0; i < arr1.length; i++) {
  //   for(let j = 0; j < arr2.length; j++) {
  //     if(arr1[i] === arr2[j]) {
  //       return true
  //     }
  //   }
  // }
  // return false;
  const {...obj} = arr1;
  console.log(obj);
  for(let i = 0; i < arr2.length; i++) {
    
  }
};

console.log(commonItems(array1, array2));

/////////////////////
//Return true if a string is a palindrome
/////////////////////
const isPalindrome = str => str.split("").reverse().join("") === str;
console.log(isPalindrome('hannah'));

/////////////////////
//Return first and last index of a sorted array
/////////////////////
const sortedArray = [1, 2, 3, 4, 5, 6, 7]
const firstAndLast = number => {
  number.filter(a => a < 2);

  
}
console.log(firstAndLast(sortedArray));

//////////////////////
//Returns the reversed string input
/////////////////////
const name = "javier"
const reverseString = (str) => {
  for(let i = str.length - 1; i >= 0; i--) {
    str[i];
  }
};

console.log(reverseString(name));
