// 題目
// function printTree(level) {
//     // 實作內容
//   }
  
//   printTree(3)
  
//   //     *
//   //   * * *
//   // * * * * *
//   //     *    
//   //     *    
  
//   printTree(4)
  
//   //       *
//   //     * * *
//   //   * * * * *
//   // * * * * * * *
//   //       *    
//   //       *    

// function printTree(level) {

//         for (let i = 1; i <= level ; i++){
//         console.log(" ". repeat ( level - i ) + "*" .repeat(i * 2 -1 ));
//     }


//     console.log(" " .repeat(level -1 ) + "*" )
//     console.log(" " .repeat(level -1 ) + "*" )

// }

// printTree(4)


function printTree(level) {
    for (let i = 1 ; i <=  level ; i++ ){
    console.log(" ".repeat(level-i) + " *".repeat(i * 2 - 1))
    }
    console.log(" ".repeat(level-1) + " *")
    console.log(" ".repeat(level-1) + " *")
}
      
printTree(3)


