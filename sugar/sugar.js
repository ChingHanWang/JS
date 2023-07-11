// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  let even = []
  let odd = []
  
  numbers.forEach(element => {
      if ( element % 2 == 0){
      even.push(element)
      }
      else {
        odd.push(element)
      }
      
    });

    if(even.length < odd.length ){
      return even.toString()
    }
    else{
      return odd.toString()
    }


  
  // 將numbers使用foreach拆分成兩個陣列，一個為奇數，一個為偶數，在進行元素長度比對，回傳短的陣列
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160

