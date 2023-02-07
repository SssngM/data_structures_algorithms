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


console.log(fuzzBizz(17)) //=> [ 2, 4, 6, 7, 8, 10, 12, 16 ]
console.log(fuzzBizz(30)) //=> [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]


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

console.log(arrayRange(0, 12, 2))// => [ 0, 2, 4, 6, 8, 10, 12 ]
console.log(arrayRange(2, 5, 1))// => [ 2, 3, 4, 5 ]
console.log(arrayRange(100, 20, 3))// => []


function arrayRange(min, max, step) {
    var arr = []
    for (let i=min; i <= max; i += step) {
        arr.push(i)
    }
    return arr
  }