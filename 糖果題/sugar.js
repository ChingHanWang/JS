// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"]
const chars2 = ["O", "Q", "R", "S"]


function missingChar(chars) {
  const newArray = chars.map((e) => e.charCodeAt());
 
  
  const firstE = newArray[0];
  const lastE = newArray[newArray.length - 1];
  const afterChar = [];
  for (let j = firstE; j <= lastE; j++) {
    let newChar = String.fromCharCode(j);
    afterChar.push(newChar);
    }
  const missingChar = afterChar.filter((char) => !chars.includes(char));
  return missingChar;
  //  使用charCodeAr將變數轉換成Unicode 编码，然後定義一個迴圈，創造出沒有缺少字元的陣列，將兩個陣列使用fliter進行比對，結合includes去交叉比對後，得到缺少的字元
  
}

console.log(missingChar(chars1)) // 印出 e
console.log(missingChar(chars2)) // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...







  





 










 



