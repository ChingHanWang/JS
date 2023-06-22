  function printTree(level) {
    for (let i = 1; i <= level; i++){
    console.log(" ".repeat(level-i) + " * ".repeat(i * 2 - 1))
    }
    console.log(" ".repeat(level-1) + "*")
    console.log(" ".repeat(level-1) + "*")
}
      
printTree(9)