function missingChar(chars) {
    const sortedChars = chars.slice().sort();
    const pattern = new RegExp(`[^${sortedChars.join('')}]`, 'i');
    const missingChars = [];
  
    for (let i = sortedChars[0].charCodeAt(); i <= sortedChars[sortedChars.length - 1].charCodeAt(); i++) {
      const char = String.fromCharCode(i);
      if (pattern.test(char)) {
        missingChars.push(char);
      }
    }
  
    return missingChars;
  }
  
  const chars1 = ["a", "b", "c", "d", "f", "g"];
  const chars2 = ["O", "Q", "R", "S"];
  
  console.log(missingChar(chars1)); // 输出 ["e"]
  console.log(missingChar(chars2)); // 输出 ["P"]
