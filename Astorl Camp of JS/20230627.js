// this 代名詞 五大情境的模擬
// / this 代名詞
// 1. 誰呼叫，誰就是 this
// 2. 沒人呼叫，this -> 全域物件(window / global)
// 3. 是否有使用 new
// 4. 是否有使用箭頭函數（箭頭函數沒有 this）
// 5. 間接啟動 this ==> .call  .apply .bind
// 6. 是否有啟用 嚴格模式

/*
Note : 

【有人呼叫this vs 沒人呼叫this】
    this 跟寫在哪裡沒有關係，重點是怎麼被呼叫!!!
    this 被誰呼叫 才會影響到 this 指向 "誰"=== 誰呼叫誰就是 this

        ==>沒有人呼叫 this 變成全物件(window/global)
            ==> hey() === window.hey (瀏覽器)

【是否有使用 New 】
    ==>使用NEW 
        -建立空物件，指向 空物件
        -再回傳
    ==>有呼叫 誰呼叫
    ==>沒有呼叫 判斷
【是否有箭頭函式】
    ==> 沒有this、沒有argument
        ==>往外面去找
【有沒有.call 、 .apply】
    ==>

【有沒有嚴格模式】
    ==>"use strict"
        ==>不會有全域物件(window、global)
    ==>寫在哪裡，就是哪裡，不會往外找
    




*/ 

// NEW 
function heroCreator(name, power) {
    // 1. this -> {  }
    // 1.5  {  }.__proto__ --> 此 function 的 prototype
    // {}.__proto__ = heroCreator.prototype
    this.name = name
    this.power = power
    // 2. return this
  }
  
  heroCreator.prototype = actions
  
  const h1 = new heroCreator("cc", 100)
  h1.attack()
  console.log(h1)






