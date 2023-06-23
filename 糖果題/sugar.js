// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"]
const chars2 = ["O", "Q", "R", "S"]


function missingChar(chars) {


  
}

console.log(missingChar(chars1)) // 印出 e
console.log(missingChar(chars2)) // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];



function findMissingChars(chars) {
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
  }
  

  const missingChars1 = findMissingChars(chars1);
  const missingChars2 = findMissingChars(chars2);
  
  console.log(missingChars1);
  console.log(missingChars2);
  



 










 



