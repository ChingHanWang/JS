// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

//宣告一個counter，起始為0，利用2個for 迴圈將元素與陣列中其他元素判斷是否相等，如果相等counter加1，
//當迴圈執行比對結束後，在判斷counter等於1為陣列中與別人不一樣的元素

function findDifferent(numbers) {
  for (let i = 0; i < numbers.length; i++ ) { 
    let counter = 0  

    let indexNumber = numbers[i]    
    for (let j = 0; j < numbers.length; j++ ){
      let compareNumber = numbers[j]

      
      if (indexNumber === compareNumber) {
      counter++

      }

    } 

    if(counter === 1 ){
      return indexNumber
    } 

  }
  
}


console.log(findDifferent([ 8 , 3, 3, 3, 3, 3, 3, 3,])); // 印出 8
console.log(findDifferent([3, 1, 1, 1, 1, 1 ])); // 印出 3
console.log(findDifferent([ 2, 2, 2, 2,4])) ;// 印出 4


