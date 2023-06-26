/*
建構子函數的使用：

JS 原型Object.creat()

*/


const actions = {
    attack: function () {
      console.log("go")
    },
    eat: function () {
      console.log("yummy")
    },
  }
  
  function heroCreator(name, power) {
    // const hero = {
    //   name,
    //   power,
    // }
    const hero = Object.create(actions)
    hero.name = name
    hero.power = power
  
    return hero
  }
  
  const h1 = heroCreator("cc", 100)
  const h2 = heroCreator("ff", 200)
  console.log(h1, h2)
  h1.attack()
  h1.eat()
  
  
  // 我們都是人這個class 所 new 出來的 instance

