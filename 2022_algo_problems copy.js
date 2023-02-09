/***********************************************************************
Write a function `factorial(n)`, that returns the factorial of the
number `n`. For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.

Examples:

factorial(1); // => 1
factorial(4); // => 24
factorial(5); // => 120
factorial(10); // => 3628800
***********************************************************************/

function factorial(n) {
  var product = 1; // 2 / 6 

  for (var i = 1; i <= n; i += 1) {
    product *= i; // 1 * 2 *3 
  }

  return product;
}


/***********************************************************************
Write a function `power(base, exp)` that takes in two numbers, a base
and exponent. The function should return `base` raised to `exp` power.
Solve this using a loop.

For example, power(2, 5) is 2 raised to the 5th power,
which is 2 * 2 * 2 * 2 * 2 = 32

Examples:

power(2, 5); // => 32
power(2, 10); // => 1024
power(9, 2); // => 81
power(9, 3); // => 729
power(11, 0); // => 1
power(11, 1); // => 11
***********************************************************************/

function power(base, exp) {
  var product = 1;

  for (var i = 0; i < exp; i += 1) { // 5 times of i (include first one 0)
    product *= base; // 1 * 2 * 2 * 2 * 2 * 2
  }

  return product;
}


//returns the lowest number which is a multiple of both num1 and num2.

// console.log(lcm(6, 10)); // => 30
// console.log(lcm(24, 26)); // => 312)

function lcm(num1, num2) {
let i = num1
  for (i = num1; i <= num1*num2; i+i) {
    if (i % num2 === 0) {
      return i
    }
    i += num1 // 6 + 6 + 6 
  }
}


//returns the number of words longer than 7 characters.

// longWordCount("short words only"); // => 0
// console.log(longWordCount("one reallylong word")); // => 1


function longWordCount(sentence) {
  let words = sentence.split(' ') // [ 'one', 'reallylong', 'word' ]
  let count = 0
  for (let i = 0; i <= words.length-1; i++) {
    if (words[i].length > 7) {
      count ++
    }
  } 
  return count
}





// mindPsAndQs('BOOTCAMP'); // => 1
// console.log(mindPsAndQs('APCDQQPPC')); // => 4
// mindPsAndQs('PQPQ'); // => 4
// console.log(mindPsAndQs('PPPXQPPPQ')); // => 5



function mindPsAndQs(str) {
    let long = 0 // 4
    let cur = 0 // 0
    for (let i of str) {
      // console.log(i)
        if (i === 'P' || i === 'Q') {
            cur += 1; // 5
        } else {
          cur = 0;
        }
        

        if (cur > long) { // 5 >0 
          long = cur // 5
        }
    }
    return long;
}




/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.
***********************************************************************/

// console.log(oddWordsOut('go to the store and buy milk')); // => 'go to milk'zz
oddWordsOut('what is the answer'); // => 'what is answer'


function oddWordsOut(sentence) {
    let word = sentence.split(' ') // [ go, to, the, ...]
    let str = []
    for (let i of word) {
      if(i.length % 2 === 0) {
        str.push(i)
      } 
    }

    return str.join(' ')
}


console.log(unique([1,23,2,4,5,1,23]) )//=> [1, 23, 2, 4, 5];
console.log(unique([1,2,5]))
// function unique(array) {
//   var uniqueArray = [];

//   for (var i = 0; i < array.length; i += 1) {
//     var ele = array[i];

//     if (uniqueArray.indexOf(ele) === -1) {
//       uniqueArray.push(ele);
//     }
//   }
  
//   return uniqueArray;
// }


// It should return an array of all the pairs of indices, whose elements sum to a multiple of 3.

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1) //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]


function divisibleByThreePairSum(array) {
  let count = 0
  let arr = []
  for (let i =0; i < array.length; i++) {
      for (let j =i+1; j <array.length; j++) {
          if ((array[i] + array[j]) % 3 === 0) {
              count++
              arr.push([array[i], array[j]])
          }
      }
  }
  console.log(arr) 
  return count // 5

}

// sum of array bigger than 5 less than 10
function unique(array) {
  let sum = 0 // 59 
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
    if (sum > 5 && sum < 10) {
      return sum
    }
  } return 'too big'
}




// have to all 5 vowels
// console.log(hasAllVowels('get out of the way, silly')); // => true
// console.log(hasAllVowels('bootcamp prep')); // => false

function hasAllVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for (let vowel of vowels) {   // vowel = vowels[i]
      if (str.indexOf(vowel) === -1) {
          return false
      }
  } return true
}


// console.log(threeUniqueVowels('go home')); // => false


// function threeUniqueVowels(string) {
//   let vowels = ['a','e', 'i', 'o', 'u']
//   let vowelsNum = 0
//   for ( let vowel of vowels) {
//     if (string.indexOf(vowel) > -1) {
//       vowelsNum ++
//       console.log(vowelsNum)
//     }
//   } if (vowelsNum >= 3) {
//     return true
//   }
//   return false // or (vowelsNum >= 3) 
// } 



//The function should return true if the strings are anagrams of each other, false otherwise.

console.log(isUniqueAnagram('abcd', 'abcdx')); // => false
console.log(isUniqueAnagram('abcd', 'adcb')); // => true

function isUniqueAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false
  }
  for (let char of word1) {
    if (word2.indexOf(char)=== -1) {
      return false
    }
  }
  return true
}




// console.log(vowelShift('bootcamp')); // => 'buutcemp'

function vowelShift(string) {
  let vowels = 'aeioua'; // 3
  let newStr= ''
  for ( let i = 0; i <= string.length-1; i++) { // 3
    if (vowels.includes(string[i]) === false) { // false 3
      newStr += string[i] // b
      // console.log(newStr)
    } else { // o
      var newIdx = vowels.indexOf(string[i]) + 1  // vowels's index num is 3 + 1
      newStr += vowels[newIdx] // 
    }
  }
  return newStr
} 


// console.log(abbreviate('how are you')); // => 'how are you'
// console.log(abbreviate('bootcamp prep is fun'))

// function abbreviate(sentence) {
//   let word = sentence.split(' ')
  
//   if (word.length > 4) {
//   var noVowels = word.replace(/[aeiou]/gi, '');
//   return noVowels
//   } else { 
//     var newSen = word.join(' ')
//     return newSen
//   }   
// } 


console.log(removeVowels('how are you')); // => 'hw r y')))

function removeVowels(word){

  let vowels = ['a','e','i','o','u'];
   let string = '';
  
     for(let i = 0; i < word.length; i++){
      //  if(!vowels.includes(word[i])){
        if (vowels.indexOf(word[i]) === -1) {
          string += word[i]
          };
        };
  return string 
  };



// console.log(avgValue([10, 20])); // => 15
// avgValue([2, 3, 7]); // => 4
// avgValue([100, 60, 64]); // => 74.66666666666667

function avgValue(array) {
    var sum = 0 
    for (var i = 0; i < array.length; i++ ) {
        sum += array[i]
    }  
    var total = sum / array.length
    return total
}


// console.log(isOdd(2));    // => false
// console.log(isOdd(5));    // => true
// console.log(isOdd(-17));  // => true

function isOdd(num) {
  // your code here...
  if (num % 2 === 0) {
    return true
    // console.log(num)
  } return false
}




var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

// console.log(diffArrayLen(a1, a2)); // => false (a1, a2 is not dffer arrays)
// diffArrayLen(a1, a3); // => true

function diffArrayLen(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return true
    } return false
}



// Write a function `isPrime(number)` that returns a boolean indicating if
// `number` is prime or not. Assume `number` is a positive integer.
// console.log(isPrime(2)); // => true
// console.log(isPrime(1693)); // => true
// isPrime(15); // => false
// isPrime(303212); // => false

function isPrime(number) {
  if (number < 2) {
    return false
  }

  for (var i = 2; i < number; i+= 1) {
    if (number % i === 0)
    return false
  }
  return true
}

// console.log(commonPrimeFactors(11,22)); // => [ 11 ]
console.log(commonPrimeFactors(45, 60)); // => [ 3, 5 ]



function commonPrimeFactors(num1, num2) {
  var factors = [] // 3, 5
  // var pirmefactor = []
  for (let i = 2; i <= num1; i++) { 
    if (num1 % i === 0 &&  num2 % i === 0) {
      if (isPrime(i)) {
        factors.push(i)
      }
    }
  }
  return factors;
}

function isPrime(num)  { // [5] {
  for (let i = 2; i < num ; i++) {
    if (num % i === 0) {
      return false
    }
  } 
  return true
}

// unique([1,23,2,4,5,1,23]) //=> [1, 23, 2, 4, 5];

// function unique(array) {
//   var uniqueArray = [];

//   for (var i = 0, i <= array.length, i += 1) {
//     var ele = array[i];

//     if (uniqueArray.indexOf(ele) === -1) {
//       uniqueArray.push(ele);
//     }
//   }
// }


// A factor is a number that divides another number with no remainder.
// console.log(commonFactors(6, 24))// => [ 1, 2, 3, 6 ]
commonFactors(11, 22); // => [ 1, 11 ]
commonFactors(45, 60); // => [ 1, 3, 5, 15 ]


function commonFactors(num1, num2) {
  let arr = []
  for (let i=1; i<=num1; i++) {
    if ( num1 % i === 0  && num2 % i === 0) {
      arr.push(i)
    }
  } return arr
}



console.log(DivisibleByThreePairSum([1, 6, 3, 4, 2, 0]));
// => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]] with index number

// console.log(DivisibleByThreePairSum([8, 3, 5, 9, 2]));
// // => [[1, 3]]

function DivisibleByThreePairSum(arr) {
  let newArr = []
  for (let i =0; i < arr.length; i++) {
    for (let j = i+1; j< arr.length; j++) {
      if ((arr[i]+ arr[j]) % 3 === 0) {
        newArr.push([i, j])
      }
    }
  }
  return newArr
}


// Assume that both input arrays have the same length.

// var a1 = (['a', 'b', 'c', 'd']);
// var a2 = [10, 20, 30, 40];

// console.log(zipArray(a1, a2))
// // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]



function zipArray(arr1, arr2) {
  var res = []
  for (var i = 0; i < arr1.length; i++){
    var res1 = arr1[i]
    var res2 = arr2[i]
    res.push([res1,res2])
  }
  return res
}



// console.log(splitHalfArray([1, 2, 3, 4, 5]));
// => [ [ 1, 2 ], [ 4, 5 ] ]
// console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

function splitHalfArray(array) {
  let newArr = []
  var mid = array.length / 2

    if (array.length  % 2 === 0) {
      mid = Math.floor(mid) 
      newArr.push(array.slice(0,mid),array.slice(mid) )
    } else {
      newArr.push(array.slice(0,mid),array.slice(mid+1) )
    }
    return newArr
}

// returns the total sum of all elements.
var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

// console.log(twoDimensionalTotal(arr1)); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

// console.log(twoDimensionalTotal(arr2)); // => 15

function twoDimensionalTotal(array) {
  var total = 0;

  for (var i = 0; i < array.length; i += 1) {
    for (var j = 0; j < array[i].length; j += 1) {
      total += array[i][j];
    }
  }

  return total;
}




// console.log(diagonalDifference(arr)) = > 15
var arr = 
[[11, 2, 4],
[ 4, 5, 6],
[ 10, 8, -12]]

// 11 + 5 - 12 = 4 ,  4 + 5 + 10 = 19 , |4 - 19| = 15

function diagonalDifference(arr) {
  // Write your code here
  var diagonal1 = 0
  var diagonal2 = 0
  for (var i=0; i<arr.length; i++) {
      for ( var j=0; j<arr.length; j++) {
          if ( i == j) 
          diagonal1 += arr[i][j] // arr[0][0]
          if ( i == arr.length-j-1) // 3-0-1 = 2
          diagonal2 += arr[i][j] // arr[2][2]
      }
     
     
      // console.log (diagonal2 )
  }
  return Math.abs(diagonal1-diagonal2)
  
}





// console.log(miniMaxSum([1, 2, 3, 4, 5]));

function miniMaxSum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i] //15
  }
  // let min = Math.min(...arr)
  // let max = Math.max(...arr)
  let min = total - Math.max(...arr) //10
  let max = total - Math.min(...arr) // 14
  // console.log(max, min)
  return [min, max];

  // var cur = arr[i];
  // if (min === null || cur < min) {
  //   min = cur;
  // }
  // if (max === null || cur > max) {
  //   max = cur;
  // }
}




// console.log(birthdayCakeCandles([3, 2, 1, 3]))  // 2 (biggiest number is 3 but two of them)

function birthdayCakeCandles(candles) {
  var total = 0
  var max = null
  for (var i = 0; i < candles.length; i++) {
    let cur = candles[i]
    if (cur > max || cur === null) {
      max = cur
      total = 1
      // console.log(max)
    } else if (max == cur) {
      total++ 
    }
  }
  return total
}




// console.log(gradingStudents([73,67,38,33,84]))

function gradingStudents(grades) {
  for (var i = 0; i < grades.length; i++) {
    let grade = grades[i] % 5
    // console.log (grades[i] %5 )
    if (grades[i] < 38) {
      grades[i]
      continue;
    } else if (grade == 3) {  // 73%5 = 3 
      // grades[i] + 2
      let tem = grades[i]
      tem = grades[i] + 2 // 73+2 
      grades[i] = tem // 73 = 75
    } else if (grade == 4) {
      // grades[i]+1
      let tem = grades[i]
      tem = grades[i] + 1
      grades[i] = tem
    }
  }
  return grades
}





// console.log(countApplesAndOranges(7, 11, 5, 15, 3, 2))

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var apples = [-2, 2, 1]
  var oranges = [5, -6]
  let totalApples = 0
  let totalOranges = 0

  for (var i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) { ////5-2,5+2,5+1 
      totalApples++
    }
  }
  for (var j = 0; j < oranges.length; j++) {
    if (b + oranges[j] >= 7 && b + oranges[j] <= 11) { //15+5,15-6
      totalOranges++
    }
  }
  // console.log(totalApples, totalOranges)
}


// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))

function breakingRecords(scores) {
  // Write your code here
  let totalBest = 0
  let totalWorst = 0
  let bestScore = scores[0] //10
  let worstScore = scores[0] //10

  for (let i = 1; i <= scores.length; i++) {
    if (scores[i] > bestScore) {  // 20 > 10
      bestScore = scores[i] // 20 <= 10
      console.log(bestScore)
      totalBest++ // totalBest = totalBest+1
    }
    if (scores[i] < worstScore) {// 5 < 10 
      worstScore = scores[i]
      totalWorst++
    }
  }
  return [totalBest, totalWorst]
}





// console.log(birthday([1, 2, 1, 3, 2], 3, 2))
// console.log(birthday([1,1,1,1,1,1], 3 ,1))


function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i <= s.length; i++) {
    let windowSum = 0;
    for (let j = 0; j < m; j++) {
      windowSum = windowSum + s[i + j]; // S[0+0] s[0+1], s[0+2]// S[1+0] s[1+1],S[1+2] // S[2+0] S[2+1] //S[3+0] S[3+1]
      //  =>  3 , 4        // 3 , 6              // 4 , 6  // 5
    } if (windowSum == d) {
      count += 1;
    }
  }
  return count;
}



function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i <= s.length; i++) {
    let windowSum = 0;
    for (let j = i; j < m; j++) {
      windowSum = s[i] + s[j + 1]  // s[0] + s[1] => 3 
      console.log(windowSum = s[i] + s[j + 1])
      if (windowSum == d) {
        count += 1;
      }
    }
  }
  return count;
}






// function birthday(s, d, m) {
//   let count = 0;

//   while(s.length > 0) {

//       let sum = 0;
//       for(let i = 0; i < m; i++) {
//           sum += s[i];
//           // console.log(sum += s[i])
//       }
//       s.shift();

//       if(sum === d) count++;

//   }
//   return count;
// }


// console.log(dayOfProgrammer(2017))

function dayOfProgrammer(year) {
  var y = year //2017
  var leap = 0
  var resYear = ""
  if (year < 1918) {
    if (y % 4 === 0) {
      leap = -1
    }
    resYear = (13 + leap + ".09." + y)
    return resYear
  } else if (year > 1918) { //2017
    if (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) {
      leap = -1
    }
    resYear = (13 + leap + ".09." + y)
    return resYear
  }
}



// console.log(bonAppetit([3, 10, 2, 9], 1, 12));
// console.log(bonAppetit([3, 10, 2, 9], 1, 7));

// function bonAppetit(bill, k, b) {

//   var anaCharged = 0
//   var newbill = 0
//   var total = 0
//   // for (var i of bill) {
//   for (let i = 0; i < bill.length; i++) {
//     if (i != k) {
//       total += bill[i]; //  (3+2+9 ) / 2 = 7 <=== newbill
//       newbill = total / 2
//       anaCharged = b - newbill  // 12-7
//     }
//     if (b === newbill) {
//       return "Bon Appetit"
//     }
//   }
//   return anaCharged
// }


function bonAppetit(bill, k, b) {

  var anaCharged = 0
  var newbill = 0
  var total = 0
  // for (var i in bill) {
  for (let i = 0; i < bill.length; i++) {
    total += bill[i]; //  (3+10+2+9 ) 
    newbill = (total - bill[k]) / 2 // (24-10) /2 = 7
    anaCharged = b - newbill  // 12-7
  }
  if (b === newbill) {
    return "Bon Appetit"
  }

  return anaCharged
}




// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))

function sockMerchant(n, ar) {
  // Write your code here
  var count = 0
  var res = 0
  var reArr = ar.sort((a, b) => a - b)
  // ar.sort((a, b) => a - b)
  console.log(reArr)
  for (let i = 0; i < reArr.length; i++) {
    var cur = reArr[i]
    var next = reArr[i + 1]
    if (cur === next) {
      count += 1
      i += 1
    }
  }
  return count
}


// console.log(catAndMouse(1, 2, 3))
// console.log(catAndMouse(1, 3, 2))

function catAndMouse(x, y, z) {
  while (x, y, z <= 100) {
    if (x < z) // 1 < 2
      x++
    else x--
    if (y < z)
      y++
    else y--  // 3 < 2
    if (x === z && y === z)
      return "Mouse C"
    else if (x === z)
      return "cat A"
    else if (y === z)
      return "cat B"

  }
}

// console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))
// let s = [
//   [5, 3, 4],
//   [1, 5, 8],
//   [6, 4, 2],
// ]

function formingMagicSquare(s) {

  // Write your code here

  var sum = 0
  //  for (let i= 0; i < s.length; i++) {
  //    for (let j=0; j < s.length; j++) {
  //     let col = s[i][j]
  //     let row = s[j][i]
  // let diag = s[i][i]
  // let reDiag = s[j][j]
  // console.log(s[j][j])
  // }
  // if (sum != col ) return false

  // let i = 0
  // let j = 0
  // while (j < s.length) {
  //   let leftdia = s[i][j]
  //   i++
  //   j++
  //   console.log(leftdia)
  // }

  // let j = 0
  // while (j < s.length) {
  //   let right = s[0][j]
  //   // i++
  //   j++
  //   console.log(leftdia)
  // }

  // while (i < s.length && j >= 0) {
  //   let rightDia = s[i][s[i].length - 1]
  //   i++
  //   j--
  //   console.log(rightDia)
  // }
  // i--
  // j++
  // return result
}



// function myIndexOf(str, target) {
//   for (var i = 0; i < str.length; i += 1) {
//     var cur = str[i];

//     if (cur === target) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(myIndexOf('happy', 'a')); // => 1
// console.log(myIndexOf('happy', 'p')); // => 2
// console.log(myIndexOf('happy', 'x')); // => -1



// getMaxMin([3, 7, 6, 2, 4]) // => [2, 7]
// getMaxMin([1, 7, 6, 2, 9]) // => [1, 9]




function getMaxMin(arr) {
  var min = null;
  var max = null;

  for (var i = 0; i < arr.length; i += 1) {
    var cur = arr[i];

    if (min === null || cur < min) {
      min = cur;
    }

    if (max === null || cur > max) {
      max = cur;
    }
  }
  console.log(min)
  return [min, max];

}



// console.log(isSorted([9, 4, 1, 5, 6, 2])); // => false
// console.log(isSorted([1, 2, 4, 5, 6, 9])); // => true


function isSorted(array) {
  for (let i=0; i <  array.length; i++) {
    if (array[i] > array[i+1]){
      return false
    } 
  } 
  return true
}


// if consecutive speeds in the array differ by no more than 5, false otherwise.
console.log(safeSpeedChange([3, 3, 2, 6, 8, 10])); // => false
console.log(safeSpeedChange([8, 10, 4, 3, 2])); // => false


function safeSpeedChange(speeds) {
  for (let i=0; i < speeds.length; i++) {
    if (Math.abs(speeds[i] - speeds[i+1]) > 5) { 
      return false
    }
  }
  return true
}




// // code Signal 

// console.log(rotateImage (
//   [[1, 2, 3],       //  00   01  02  = > 20  10   00
//   [4, 5, 6],        //  10   11  12  =>  21  11   01
//   [7, 8, 9]]))      //  20   21  22  =>  22  12   02

function rotateImage(a) {                       
  var res = []                                       // want i is fix as 2 1 0 and run j 0 1 2
  for (let j=0; j<a.length  ; j++ ) {             // run j first : 0  -> i  :2  = 20  10  00
    var arr = [] 
     for(let i = a.length-1 ; i>= 0; i--) {            // 02 01 00 [j][i] ====> switch [i][j] 
          arr.push(a[i][j])// 20 , 10  , 00           
      }
      res.push(arr)
  }
  return res
}


// console.log(toFindDuplicates([2, 1, 3, 5, 3, 2])) // 3 - 2 is big index gap

// console.log(solution(['a, b, c, c, f, a'])) 

function solution(a) {
  var arr = [];

  for (var i = 0; i < a.length; i++) {
    let cur = a[i];
    if (arr[a[i]] !== undefined)  //  arr[a] !== undefined , b , c , c ....not index number of []
      return a[i];  // c
    else
      arr[a[i]] = i;  //  arr[a] = 0  => [a, b , c]
  }

  return -1;
}


function toFindDuplicates(a) {
  for (var i = 0; i <= a.length; i++) {
    for (var j = i; j <= a.length; j++) {
      if (i != j && a[i] == a[j]) {
        return a[i]
      }
    }
  }
  return undefined
}


function getSum(a) {
  let count = 0
  for (let cur of a) {
    count += cur
  }
  return count
}



// function solution(a) { 
//   obj = new Set(a)
//   for (let dup of a)
//       if (obj.has(dup))
//           return dup
//       else
//           obj.add(dup)
//   return -1
// }


// console.log(getChar("abacabadf"))  // c not repeat word

// function solution(s) {  // s.indexOf(a) = 0,2,3
//   for (var i=0; i<s.length; i++) {
//     var char = s[i]
//     // if (s.indexOf(char)==i && s.indexOf(char, i+1) == -1) 
//     if (s.indexOf(s[i]) === s.lastIndexOf(s[i]))
//     console.log(s.indexOf(s[i]))
//     // console.log(s.lastIndexOf(s[i]))
//     // return char
//   }
//   return '_'
// }
//      u u u u
// abacabadafaia
function getChar(s, n) {
  let seenFirstUniq = false; //t
  const counts = getCounts(s)
  for (let i = 0; i < s.length; i++) {
    var key = s[i] // avac   2. if its "c" counts[key] === 1 but seenfirstuniq always false so keep
    if (counts[key] === 1) {  // 1.this is uniq  if "c" === uniq return key 
      if (seenFirstUniq === true) {    // 4. if next uniq is true 
        return key
      }
      seenFirstUniq = true; //  3. if you want to return 2nd char like "d"  seenfirstuniq has to be true
    }
  }
  return '_';
}

function getCounts(s) {
  var counts = {};
  for (var i = 0; i < s.length; i++) {
    let cur = s[i];
    if (counts[cur] === undefined) {
      counts[cur] = 1;
    } else {
      counts[cur] += 1;
    }
  }
  return counts;
}





//where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

// console.log(twoOfSum([1, 2, 3], [10, 20, 30, 40], 42))

// function twoOfSum(a, b, v) {     /// quardatic n*n
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) { 
//       if ( a[i] + b[j] === v) {
//         return true
//       }
//     }
//   }
//   return false
// }

function twoOfSum(a, b, v) {  //
  const counts = getCounts(b)
  for (let cur of a) {
    const matchingPair = (v - cur); // 41, 40 , 39        no need counts[cur]
    if (counts[matchingPair] !== undefined) {  //  counts[42] there is no values just find key is there
      return true;
    }
  }
  return false
}

function getCounts(b) {  // 10:1 , 20:1 , 30:1 , 40:1
  let counts = {};
  for (let char of b) {
    if (counts[char] === undefined) {    
      counts[char] = 1;
    } else {
      counts[char]++;
    }
  }
  return counts
}

function getSum(a) {
  let count = 0
  for (let cur of a) {
    count += cur
  }
  return count
}


// There are two ways to represent n = 9,  2 + 3 + 4 = 9 and 4 + 5 = 9.
// return 2 (2 ways to be 9)

// console.log(SumConsec(9))

function SumConsec(n) { // 9
  let nums = []
  let sum = 0
  let count = 0;
  // for (let i = 0; i < n-1; i++) { // i < 1234
  //     nums.push(i); //  i= 0-8  nums= [123456789]
  //     sum = nums[i] //sum = 1, want to i= 1 till j is done(out of j fun)
  
  for (let i = 1; i < n; i++) { // i < 1234
      sum = i //  1..8
      for (let j = i + 1; j < n; j++) {  // i=1 j= 2,3,4
          sum = sum + j       // 1= 1+2, 3 = 3+3, 6 = 6+4 , 10 break
          if (sum === n) {
              count++;
          } else if (sum > n ) {
              break;
          }
      }   
  }
  return count
}



// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]


function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for (var i = 0; i < inputArray.length; i++)
      if (inputArray[i] === elemToReplace) {
          inputArray[i] = substitutionElem
      }
      return inputArray
   }



  //  console.log(evenOrodd([7, 2, 2, 5, 10, 7]))




// For a = 1, b = 2, and n = 2, the output should be solution(a, b, n) = 8.

// You will cast your first marble and get $2, after which the numbers will become 2 and 3. When you cast your second marble, the well will give you $6. Overall, you'll make $8. So, the output is 8.

// 30 
// 30 + 42
// 72 + 56 (n times)


function MagicWell(a, b, n) { // 6 5 3 
  var sum = 0
      for (i=0; i<n; i++) {
          sum = sum + a*b   // 30 = 30 + 42 => 72 = 56
          a = a+1 // a++
          b = b+1 // b++
      }
      return sum
  }



//For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"]

  function allLongestStrs(inputArray) {

    let longestStrs= [];
    let maxLen = getMaxlen(inputArray) 
    for(let i = 0; i<inputArray.length; i++) {
            
        if (inputArray[i].length === maxLen) {
            longestStrs.push(inputArray[i]);
        }
    }
    return longestStrs;
}

function getMaxlen(inputArray) {
    // make helper func for longest lnegth
    var maxLen = 0;
    for (let curStr of inputArray) {
        if ( curStr.length > maxLen) {
            maxLen = curStr.length;
        }
    }   
    return maxLen;
}


// For n = 1230, the output should be
// solution(n) = true;  1+2 === 3+0
// For n = 239017, the output should be
// solution(n) = false.

function isLunky(n) {
  // let arr = n.toString();
  let arr = Array.from(String(n), Number);
  // console.log(arr)
  let start = 0
  let end = arr.length-1
  let left = 0
  let right = 0
  let mid = Math.floor((start+end)/2)   // [239017] mid =  2
  console.log(mid) 
  // let half = (arr.length+1)/2  // 2
  for (let i=0; i< arr.length; i++) { 
      if ( i <= mid) { // arr[0,1,2]
          left += arr[i]      // 2+3+9 = 14
          // console.log(left)
      } else if ( i > mid  ) { // arr[3,4,5]
          right += arr[i]
      } 
    } 
  // console.log(left,right)
  if (left != right ) {
      return false
  } else {
      return true
  }
}


// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].  // -1 is tree, others ppl

function sortByheight(a) {

    a.filter(el => el !== -1).sort((a, b) => a - b)
    return a.map(p => {
        if (p > -1) {
            return s.shift() // first one will come of sort
        }
        return  -1    // if p === -1  will be same -1   
   })
}

//  others
// function solution(a) {
//     let filtered = a.filter(val => val !== -1)
//     let sorted = filtered.sort((a, b) => a-b)
//     return a.map(val => val === -1? -1: sorted.shift())
// }



// alphabeticShift (codesignal)
//Given a string, your task is to replace each of its characters by the next one in the English alphabet; 
//i.e. replace a with b, replace b with c, etc (z would be replaced by a).

// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
// For inputString = "crazy", the output should be solution(inputString) = "dsbaz".


function solution(inputString) {
  let newStr = ''
  let alpha = " abcdefghijklmnopqrstuvwxyza"
  for (let cur of inputString) {
      
      let idx = alpha.indexOf(cur) // crazy 
      idx = idx+1
      newStr += alpha[idx]
      console.log(alpha[idx])
  } 
  return newStr
}










