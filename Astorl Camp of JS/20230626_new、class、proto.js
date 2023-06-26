// prototype and .__proto__

/*JS this 概念*/ 

/*
建構子函數的使用：

JS 原型Object.creat()

還有一個選擇，你可以按照這兩個步驟來建立物件︰

編寫建構子函數以完成物件類型的定義。
使用 new 來建立許多個物件

若要定義物件類型，就指定物件類型的名稱、屬性、方法並建立函數。


*/


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

/*JS 在ES6後 新增 class 概念 */ 

  class heroCreator {
    constructor(name, power) {
      this.name = name
      this.power = power
    }
  
    attack() {
      console.log("gogo!")
    }
  }
  
  const h = new heroCreator("cc", 100)
  h.attack()