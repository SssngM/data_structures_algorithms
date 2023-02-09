// day1

// Write a function evenRange(start, end) that returns an array containing all even
// numbers between 'start' and 'end' in sequential order.

console.log(evenRange(13, 20)) //=> [ 14, 16, 18, 20 ]
console.log(evenRange(4, 11)) //=> [ 4, 6, 8, 10 ]
console.log(evenRange(8, 5)) //=> []


function evenRange(start, end) {
    var arr = []
    for (let i=start; i <= end; i++ ) {
        if (i % 2 === 0) {
            arr.push(i)
        }
    }
    return arr

}


//Write a function reverseString(string) that takes in a hyphenated string and
//returns a the hyphenated string reversed.

console.log(reverseString("Go-to-the-store")) // => "store-the-to-Go"
console.log(reverseString("Jump,-jump-for-joy")) // => "joy-for-jump-Jump,"

function reverseString(string) {
    var newStr = []
    var str = string.split('-')

    for (let i = str.length-1; i >= 0; i--) {
        newStr.push(str[i])
    }
    var reverseStr = newStr.join('-')
    return reverseStr
}




// Write a function intersect(arr1, arr2) that takes in two arrays and returns a
// new array containing the elements common to both arr1 and arr2.

// Hint: use indexOf
console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']))// => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])) // => []

function intersect(arr1, arr2) {
    var arr = []
    for (let char of arr1) {
        if (arr2.indexOf(char) > -1) {
            console.log(char)
            arr.push(char)
        }
    } 
    return arr
}

// Write a function fuzzBizz(max) that returns an array of numbers under
// the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.


// console.log(fuzzBizz(17)) //=> [ 2, 4, 6, 7, 8, 10, 12, 16 ]
// console.log(fuzzBizz(30)) //=> [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]


function fuzzBizz(max) {
    var arr = []
    for (let i = 0; i < max; i++ ) {
        if ((i % 2 === 0 || i % 7 === 0) && ( i % 14 !== 0)) {
            arr.push(i)
        }
    }
    return arr
}






// Write a function arrayRange(min, max, step) that takes in 3 numbers as parameters
// The function should return an array containing all numbers between `min` and `max`
// at `step` intervals.

// Examples:

// console.log(arrayRange(0, 12, 2))// => [ 0, 2, 4, 6, 8, 10, 12 ]
// console.log(arrayRange(2, 5, 1))// => [ 2, 3, 4, 5 ]
// console.log(arrayRange(100, 20, 3))// => []


function arrayRange(min, max, step) {
    var arr = []
    for (let i=min; i <= max; i += step) {
        arr.push(i)
    }
    return arr
  }


// find pair of sock 10 is 4 (2pair) + 20 is 3 (1pair)

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]))

var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]


function sockMerchant(ar) { 
    // hash tag 
    var count = numCounts(ar)
    var pair = 0
    for (let key in count) {
        var remainder = Math.floor(count[key] / 2)
            pair += remainder
    }
    return  pair
}
 


function numCounts(ar) {  //  { '10': 4, '20': 3, '30': 1, '50': 1 }
    var count = {}
    // console.log(ar)
    // for (let cur of ar) {
    for (var i = 0; i < ar.length; i++) {
        var cur = ar[i];
    // console.log(cur)
        if (count[cur] === undefined) {
            count[cur] = 1
        } else {
            count[cur] += 1
        }
  
    }
    console.log(count)
    return count
}
 

 

  // day 2

//   Write a function mysticNumbers(max) that returns an array of numbers less than `max`.
//   Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers
//   should be in reverse-sequential order.
  
  

console.log(mysticNumbers(25)) //=> [ 20, 18, 16, 8, 6, 4 ]
console.log(mysticNumbers(14)) //=> [ 8, 6, 4 ]


function mysticNumbers(max) {
    var arr = []
    for (let i = max; i > 0 ; i-- ) {
        if ((i % 4 === 0 || i % 6 === 0) && (i % 12 !== 0 )) {
            arr.push(i)
        }
    }
    return arr
}




console.log(isSquare(18)) //=> false
console.log(isSquare(25)) //=> true
console.log(isSquare(36)) //=> true


function isSquare(number) {
    for (let i = 1; i < number; i++) {
        if (i * i === number) {
            return true
        }
    }
    return false
}



// - the first element if there is an even number of elements in the array

// - the last element if there is an odd number of elemetns in the array

// You can assume the array contains at least one elemen)t



console.log(firstOrLast(['a', 'b', 'c', 'd']))// => 'a'
console.log(firstOrLast(['Jenny', 'Mary', 'Mark'])) //=> 'Mark'

function firstOrLast(array) {
    var str = ''
    for (let i =0 ; i < array.length; i++) {
        if (array.length % 2 === 0) {
            str = array[0]
        } else {
            str = array[array.length-1]
        }
    }
    return str
}



// Write a function `minMaxProduct(array)` that return the product between the
// largest value and the smallest value in the array. Assume `array` is an array of
// numbers. Assume an array of at least two numbers.

// Examples:

console.log(minMaxProduct([6, 3, 7, 2])) //=> 14
console.log(minMaxProduct([0, 1, -5, 3, 6]))// => -30

function minMaxProduct(array){
    var pro = [] 
    var max = array[0]
    var min = array[0]
    for (let cur of array) {
        if (cur ===  null || cur > max) {
            max = cur // 6
        } 
        if ( cur === null || cur < min) {
            min = cur
        }
    }
    pro = max * min
    return pro
}


console.log(valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4}))
//=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
//=> [ 'placements', 'operations', 'tommy' ]



function valueReplace(array, obj){
    var arr = []
    for (let key of array) {
        if (obj[key] === undefined) {
            arr.push(key)
        } else {
            arr.push(obj[key])
        }
    }
    return arr
}


// day 4

console.log(objectToString({a : 2, b: 4, c: 1})) //=> 'aabbbbc'
console.log(objectToString({b: 1, o: 2, t: 1})) //=> 'boot'

function objectToString(count) {
  // your code here...
  var str = ''
  for (let key in count) {
    // console.log(key) // key abc
    console.log(count[key]) // val 2 4 1
    for (let i=0; i< count[key]; i++) {
         str += key
    }
  }
  return str
}



console.log(valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'}))
//=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

console.log(valueConcat(['a', 'b', 'c'], {b: 2, c: 3}))
//=> [ 'a', 'b2', 'c3' ]

function valueConcat(array, obj) {
    var arr =[]

    for (let ele of array) {
        var value = obj[ele]
        if ( ele === undefined) {
            arr.push(ele)
        } else {
            arr.push(ele+value)
        }
    }
    return arr
}


console.log(shortestWord('app academy is cool')) //=> 'is'
console.log(shortestWord('bootcamp prep'))// => 'prep'

function shortestWord(sentence) {
    var str = ''
    var words = sentence.split(' ')
    var shortLen = null
    for (let word of words) {

        if ( shortLen === null ||  word.length < shortLen.length) {
            shortLen = word
        } 
    } 
    return shortLen
}


// day 5

/*******************************************************************************
Write a function isPassing(assessments) that takes in an array of assessment objects.
The function should return a true if the average assessment score is at least 70.
It should return false otherwise.

Examples:
*******************************************************************************/
var assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

var obj = {
    one: 'Seung',
    one: 'Seung2',
    two: 2,
    three: 'Nate',
}

console.log(objectPractice(obj))

function objectPractice(obj) {

    for (let key in obj) {
    let val = obj[key];
    // console.log(key)
    // console.log(val)
    console.log(Object.keys(obj))
    console.log(Object.values(obj))
    // console.log( [key, val])
    } 
}

// keys = Object.keys(obj);
// [one,two,three]

// for (let i = 0; i < keys.lenght; i++) {
//     key = keys[i]; // 'one'
//     obj.key // just string
//     obj[key]
// }


console.log(isPassing(assessments1)) //=> true


var assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

console.log(isPassing(assessments2)) //) => false


function isPassing(assessments) {
    var score = 0
    for (let obj of assessments){
        // console.log(obj.score)
        score += obj.score
    }

    console.log(score / assessments.length)
    if (score / assessments.length > 70 ) {
        return true
    }
    return false
  }






  /*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
    // your code here...
  }




  /*******************************************************************************
Write a function reverse2D(array) that takes in a 2D array of strings. The function
should return a string representing the elements of the array in reverse order.

Examples:

var arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) => 'ihgfedcba'


var arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) => 'PatrickOscarMikeMattJulian'

*******************************************************************************/

function reverse2D(array) {
    // your code here...
  }



console.log(miniMaxSum([1, 2, 10, 4, 5]));

  function miniMaxSum(arr) {
    arr.sort((a,b)=> a-b)
    return arr
  }

//   function miniMaxSum(arr) {
//     var max = null
//     var min = null
//     arr.sort((a,b)=> a-b)
//     for (let num of arr) {
//         // max = Math.max(...arr)
//         // min = Math.min(...arr)
//         // max = arr[0], min = arr[arr.length-1]
//         if ((max === null) || num > max) {
//             max = num
//         } 
//         if ((min === null) || num < min) {
//             min = num
//         }
//     }
//     return [max, min]
//   }


// day 6

// Write a function `myFind(arr, cb)` that accepts an array and a callback. It should
// return the first element of the array where the callback returns true when passed
// each element. The function should return undefined if the callback does not return
// true for any element.

// Example:

function isUpper(str) {
  return str.toUpperCase() === str;
}

// console.log(myFind(['bootcamp', 'PREP', 'IS', 'fun'], isUpper)) //=> 'PREP'
// console.log(myFind(['hello', 'world'], isUpper)) //=> undefined


function isEven(n) {
  return n % 2 === 0;
}

// console.log(myFind([11, 7, 10, 20], isEven))// => 10
// console.log(myFind([3, 5, 9], isEven))// => undefined


function myFind(arr, cb) {
    for (let cur of arr) {
        if (cb(cur)) {
            return cur
        }
    }
    return undefined
}




console.log(hasSymmetry([1, 2, 3, 3, 2, 1]))// => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1]))// => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']))//
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) //=> false


function hasSymmetry(array) {
    var mid = array.length/ 2
 
    for (let i =0; i < array.length ; i++) {
        // console.log([array.length-1-i]) 
        if (array[i] !== array[array.length-1-i]) { //  6-1-0 5
            return false
        }
    }
    return true
}