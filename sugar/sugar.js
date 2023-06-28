// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
   const squareArray = Array.from(String(num) , Number ).map(e => e**2 ) 
   const arrayToDigits = squareArray.join('')
   return arrayToDigits;

// 宣告"squareArray"為 將輸入的參數利用Array.from轉成number的新陣列，同時使用map對陣列中每個元素進行平方，得到一個新的陣列
// 再將squareArray使用joing將陣列轉成數字，然後將其回傳
   
 
}

console.log(squareDigits(3212)) // 印出 9414
console.log(squareDigits(2112)) // 印出 4114
console.log(squareDigits(387)) // 印出 96449



// .join()
// Array.from( input , type)




