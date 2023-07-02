// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  for (let i = 0; i < numbers.length; i++ ) { 
    let  counter = 0
    
    
          let a = numbers[i]
          console.log( "第" + i + "i=" + a )


          for (let j = 0; j < numbers.length; j++ ){
            b = numbers[j]

            console.log( "第" + j + "j=" + b)
            
          
            if (numbers[j] === a) {
              counter++
              console.log(counter)
            }

    } 

    if(counter === 1 ){
      return a
    } 
  
  }

  



  
}


// // console.log(findDifferent([ 8 , 3, 3, 3, 3, 3, 3, 3,])); // 印出 8
// console.log(findDifferent([3, 1, 1, 1, 1, 1 , " "])); // 印出 3
// // console.log(findDifferent([ 2, 2, 2, 2,4])) ;// 印出 4


