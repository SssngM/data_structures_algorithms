
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




// console.log(ivisibleByThreePairSum([1, 6, 3, 4, 2, 0]));
// // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// console.log(ivisibleByThreePairSum([8, 3, 5, 9, 2]));
// // => [[1, 3]]

function ivisibleByThreePairSum(arr) {
  var pairs = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1 ; j < arr.length; j++) {
      var sum = arr[i] + arr[j]
      // console.log(sum)
      if (sum % 3 === 0) {
        pairs.push([i,j])
      }
    }
  }
  return pairs
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




// returns the total sum of all elements.
var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

console.log(twoDimensionalTotal(arr1)); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

console.log(twoDimensionalTotal(arr2)); // => 15








// console.log(miniMaxSum([1, 2, 3, 4, 5]));

function miniMaxSum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i] //15
  }

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




// console.log(birthdayCakeCandles([3, 2, 1, 3]))  // 2

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
  console.log(totalApples, totalOranges)
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


console.log(dayOfProgrammer(2017))

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


// const arr = [1, 2, 3];

// arr.forEach(console.log)







// // code Signal 

console.log(rotateImage (
  [[1, 2, 3],       //  00   01  02  = > 20  10   00
  [4, 5, 6],        //  10   11  12  =>  21  11   01
  [7, 8, 9]]))      //  20   21  22  =>  22  12   02

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


console.log(toFindDuplicates([2, 1, 3, 5, 3, 2])) // 3 - 2 is big index gap

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

console.log(twoOfSum([1, 2, 3], [10, 20, 30, 40], 42))

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
  console.log(left,right)
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
