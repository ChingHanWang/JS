<<<<<<< HEAD
// var side = 1
let arr = [];
arr["5"] =42
console.log(arr)
=======
// document.addEventListener("DOMContentLoaded", ()=> {
//     const hero = document.querySelector("#hero")
//     console.log(hero);


// })

// 解析瀏覽器一樣要加監聽事件，但是使用JQuery套件可以讓撰寫更方便

/*
Jquery使用方法
$
ƒ (e,t){return new ce.fn.init(e,t)}
==>表示成功

$("#hero").html("Hello")
==>抓到元素改變元素的內容

*/  

$().ready(()=>{
    const hero = $("#hero")
    hero.html ("hi")
    console.log(hero);

})


// 抓資料
const url = "https://jsonplaceholder.typicode.com/posts"

$.ajax({url:url}).done( (posts) => {
    posts.forEach( ( post )=>{
    console.log(post.title)
    
        
    });

   
  


})
/*抓到網路上JSON資料，透過套件JQery，得到的資料無需重新編譯( .jsonpart)，讓JS直接使用 

*/

 


>>>>>>> sugar08
