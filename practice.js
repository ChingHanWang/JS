// list => [1, 4, 2, 3, 8, 7, 10, 12]
// 挑出陣列裡的奇數，乘以 3 之後，計算總和


let list =  [1, 4, 2, 3, 8, 7, 10, 12]
let sum= 0
for( i = 0 ; i < list.length ; i++ ){
  
  if(list[i]% 2 !== 0 ){
    sum += list[i]*3
    // sum = sum + list[i]

  }

}
console.log( sum )





// const list = [1, 4, 2, 3, 8, 7, 10, 12];

// const result = list
//   .filter((el) => el % 2 == 1)
//   .map((el) => el * 3)
//   .reduce((a, b) => a + b);
// console.log(result);

// list = [1, 4, 2, 3, 8, 7, 10, 12];
// 挑出陣列裡的奇數，乘以 3 之後，計算總和
