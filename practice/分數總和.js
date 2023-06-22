
// 陣列學習
// let list = [1, 2, 3, 4, 5, 6, 7]
// console.log(list)



// 題目-->分數總和

// let total = 0

// let scort = [2, 4, 8, 9, 10 ]
// for(let i = 0 ; i < scort.length ; i++){ 
//     total = total + scort[i] 
//     //值行結果： i++ 的意思是每次直行完迴圈都 +1 的意思

// }

// console.log(total)


let scort = [2, 4, 8, 9, 10 ]

let result = scort.reduce((acc,cv) => {
    console.log({acc,cv})
    return acc + cv 

})

console.log(result)

// VM265:5 {acc: 2, cv: 4}
// VM265:5 {acc: 6, cv: 8}
// VM265:5 {acc: 14, cv: 9}
// VM265:5 {acc: 23, cv: 10}
// VM265:10 33
// undefined

// let scort = [2, 4, 8, 9, 10 ]

// let result = scort.reduce((acc,cv) => {
//     console.log({acc,cv})
//     return acc - cv 

// },100)

// console.log(result)

// // VM316:5 {acc: 100, cv: 2}
// // VM316:5 {acc: 98, cv: 4}
// // VM316:5 {acc: 94, cv: 8}
// // VM316:5 {acc: 86, cv: 9}
// // VM316:5 {acc: 77, cv: 10}
// // VM316:10 67



var a = 1 
var b = 2
console.log()














