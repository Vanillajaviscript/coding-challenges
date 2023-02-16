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
  let first = number[0];
  let last = number[number.length - 1];
  let final = [];
  final.push(first);
  final.push(last);
  return final;
}
console.log(firstAndLast(sortedArray));

//////////////////////
//Returns the reversed string input
/////////////////////
const name = "javier"
const reverseString = (str) => {
  let reversed;
  for(let i = str.length - 1; i >= 0; i--) {
    str[i];

  }
};

console.log(reverseString(name));
const reverseStringRefactored = str => str.split("").reverse().join("");
console.log(reverseStringRefactored(name))


const fizzBuzz = () => {
  for(let i = 0; i <= 20; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if(i % 3 === 0) {
      console.log("Fizz")
    } else if(i % 5 === 0) {
      console.log("Buzz")
    } 
  }
};
console.log(fizzBuzz());


function Kth_greatest_in_array(arr, k) {

  for (var i = 0; i < k; i++) {
    var max_index = i,
      tmp = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }

    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr[k - 1];
}

console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1));
//////////////
//even or odd
//////////////

const evenOrOdd = (num) => {
  if(num % 2 === 0) {
    return "Even"
  } else{
    return "odd"
  }
};
const evenOddRefactord = num => num % 2 === 0 ? "Even" : "Odd";
console.log(evenOddRefactord(3));
console.log(evenOrOdd(2));

////////////////
//Vowel count
////////////////

const vowelCount = count => {
  let vowelNum = 0;
  let vowels = ['a', 'i', 'u', 'e', 'o'];
  for(let i = 0; i < count.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
      if(count[i] === vowels[j]) {
        vowelNum++
      }
    }
  }
  return vowelNum
};

console.log(vowelCount("Letter"))