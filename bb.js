// list => [1, 4, 2, 3, 8, 7, 10, 12]
// 挑出陣列裡的奇數，乘以 3 之後，計算總和

// const list =  [1, 4, 2, 3, 8, 7, 10, 12]

// function (array){
//     for (let i = 0 ; i < array.length ; i ++ ){
//         if ()

//     } 
        
//     ;


// }



const list = [1, 4, 2, 3, 8, 7, 10, 12];

const result = list
  .filter((el) => el % 2 == 1)
  .map((el) => el * 3)
  .reduce((a, b) => a + b);
console.log(result);




