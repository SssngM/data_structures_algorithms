var a = [
    [1, 5, 3, 4],
    [3, 3, 1, 8],
    [6, 4, 9, 4],
    [9, 7, 3, 4],
]


console.log(getDiagonalElements(a))

//1 .return first low [1, 5, 3, 4] / fist colum [1,3,6,9]

//2. reutrn left diagonol  [1,3,9,4]
//3. reuturn right diagonol 
//4. all diagonal 
//5  rotate square [9,6,3,1]
// function getDiagonalElements(a) {
//     var arr = [] 
//     for (let i=0; i<a.length; i++) {
//         let sub = a[i]
//         let subarr = []
//         for (let j =0; j<sub.length; j++) {
//             // var firRow = []
//             // var firCol = []
//             // subarr.push(a[0][j])  // first col
//             // subarr.push(a[i][i])  // left diagonol
//             // subarr.push(a[i][j])  // whole matrix
//             // subarr.push(a[i][a.length-1]) // last col
//             // subarr.push(a[a.length-1][i])
//             subarr.push(a[i][(a.length-1-i)])
//         } 
//         console.log(subarr)
//         arr.push(subarr)
//         // return subarr
//     }
//     // return arr
// }


function getDiagonalElements(a) {
    for (let c = 1; c <= a.length; c++) {
        let subArr = []
        let i = 0
        let j = c - 1
        while (j >= 0) {
            var diaHalf = a[i][j]  // 
            i++
            j--
            subArr.push(diaHalf)
        }
        console.log(subArr)
    }
    for (let c = 1; c <= a.length - 1; c++) {
        let subArr = [] //[8 9 7]
        // let i = 1  // 1 2
        let i = 1 //1
        let j = a.length - 1  // 3
        while (j > 0) {
            let diaLeft = a[i][j]    // 9
            i++                 // 
            j--                 // 
            subArr.push(diaLeft)
        }

        console.log(subArr)
    }

}