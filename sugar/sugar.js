// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

// function findDifferent(numbers) {

//   const uniqueElements = numbers.filter((e, index) => {
//    return  numbers.indexOf(e) === index && e !== 1

//   });



//  }
 
 console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])) // 印出 3
//  console.log(findDifferent([2, 2, 2, 4, 2, 2])) // 印出 4
//  console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])) // 印出 8

function findDifferent(numbers) {
  const uniqueElements = numbers.filter((element, index) => {
    return numbers.indexOf(element) === index && element !== 1;
  });
  
  return uniqueElements;
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1]));


