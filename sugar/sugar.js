// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor("5xruby.tw") {
  let  anchorIndex = "5xruby.tw".anchorIndex()
  console.log(anchorIndex);
}


//console.log(removeAnchor("5xruby.tw")) // 印出 5xruby.tw
//console.log(removeAnchor("5xruby.tw/#about")) // 印出 5xruby.tw/
//console.log(removeAnchor("5xruby.tw/courses/?page=1#about")) // 印出 5xruby.tw/courses/?page=1