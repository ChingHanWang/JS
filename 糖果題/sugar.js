// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

function moveZerosToEnd(arr) {

  const Zero = arr.filter ( (e) => e === 0 )
  const afterFilter = arr.filter ( (e) => e !== 0 )

  return afterFilter.concat(Zero)

  // 使用filter取得0的陣列，再用一次fliter取得不包含o的陣列，最後合併兩個陣列
  
}

let result = moveZerosToEnd(list)
console.log(result) // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
