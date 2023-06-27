// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

// 有問題的地方：跟台灣時區沒有關係

function humanReadableTimer(seconds) { 
  let milliSeconds = seconds * 1000 - 28800000
  // date單位為毫秒，將輸入的參數轉換成豪秒，再扣掉台灣時區8小時


  let time = new Date(milliSeconds);
  let timeString = time.toTimeString().substring(0 , 8)
  
  // 將時間轉換成字串，並取前面時間片段

  return timeString 

}


console.log(humanReadableTimer(0)) // 印出 00:00:00
console.log(humanReadableTimer(59)) // 印出 00:00:59
console.log(humanReadableTimer(60)) // 印出 00:01:00
console.log(humanReadableTimer(90)) // 印出 00:01:30
console.log(humanReadableTimer(3599)) // 印出 00:59:59
console.log(humanReadableTimer(3600)) // 印出 01:00:00
console.log(humanReadableTimer(45296)) // 印出 12:34:56
console.log(humanReadableTimer(86399)) // 印出 23:59:59
console.log(humanReadableTimer(86400)) // 印出 24:00:00
console.log(humanReadableTimer(359999)) // 印出 99:59:59