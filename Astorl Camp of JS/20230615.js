// /*

// # 2023.06.15 JavaScript
// **1. 流程控制**

// **2. 函數**

// ==>如何定義函數?
// ==>匿名函數、箭頭函數
// (當作一等公民來使用時候，他的名稱不重要，只要可以使用、執行)


// ==>差異?
// ==>參數 vs 引數 
// ==>參數的預設值
// ==>回傳值
// ==>所有函數是否有回傳功能?




// 函數在宣告時候：
// ＝＝＞順序顛倒
    
    
// **4. 陣列 & 物件**

// ==>陣列裡面可以隨意放取(任何值)
// ==>陣列可以再放陣列(多維度) 
// ==>放進去之後，如何取出跟替換?
// ==>常用方法

// ==>如何檢查陣列的元素?
// indexOf、includes、
// forEach、callback
// 符合條件的元素??
// find、map、filter、reduce
// ==>沒有符合的結果===undefine，回傳空陣列
// 整合功能-簡約==>reduce


  

     
// **5. DOM**


// Class：
// 瀏覽器"物件化" ==> 透過"HTML" 的標籤，將"文件" JS可以跟HTML溝通
// ==>物件化的過程會依據JS的存放位置，而影響到兩者溝通
// document.getElementById("myBtn")
// document.querySelector(".myclass");
// ==>querySelector 與 getElementById 兩者差異與特別之處 ??


// ==>Checking whether loading is already complete


// ==>透過監聽.addEventListener
// document.getElementById("myBtn").addEventListener("click", displayDate);
// Document: DOMContentLoaded 事件
// ==>当纯 HTML 被完全加载以及解析时，DOMContentLoaded 事件会被触发，而不必等待样式表，图片或者子框架完成加载

// document.addEventListener("DOMContentLoaded", (event) {
//     console.log("DOM fully loaded and parsed");
// 範例:

// <script>
//     document.addEventListener("DOMContentLoaded", fuction(){
//     console.log(123)
// }

// */


// // const list = [1, 2, 3, 4, 5];

// // const result = list.map el =>  {2 }

// // console.log(result);


// // const list = [1, 2, 3, 4, 5];
// // const result = list.map(function (el) {
// //   return el * 2;
// // });
// // console.log(result);

// // 改寫精簡的方式




// // // const result = list.map((el) => el * 2);
// // // console.log(result);

// // // 要挑選偶數
// // // 限定使用 for 迴圈

// // const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const result = list.filter((el) =>){
// //     if (el % 2 != 0){ 

// //     return el * 2
            
// //         }
// // }

// // console.log(result);

// // //1. 挑出所有的奇數
// // //2. 把這些奇數 x3
// // //[3, 9, 15....27]




// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const odd_numbers = list.filter((el) => el % 2 != 0);
// // const result = odd_numbers.map((el) => el * 3);
// // console.log(result);

// // const result = list.filter((el) => el % 2 != 0)
// //                    .map((el) => el * 3);
// // const result = odd_numbers.map((el) => el * 3);
 
// const odd_number = (el) => el % 2 != 0;
// const triple = (el) => el * 3;

// // functional programming
// // const result = list.filter(odd_number)
// //                    .map(triple);

// // console.log(result);


// // const list = [1, 2, 3, 4, 5];
// // for (let i = 0; i < list.length; i++)



// // 印出總和 15
// // 限用 for 迴圈

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 計算 奇數的總和
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }













