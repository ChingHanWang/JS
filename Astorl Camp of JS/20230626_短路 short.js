function isAdult(age) {
    return age > 18
  }
  
  function vote() {
    // 花時間
    for(let i = 0; i < 1000000000; i++) { }
  
    console.log("vote!")
    return true
  }
  
  isAdult(20) && vote()
  
  if (isAdult(20)) {
    vote()
  }
  
  
  // 短路 short
  // 判斷有沒有 ==> "?""