/*
新增DOM動態元素
const hello = document.querySelector("#hello")

const h = document.createElement("h1")
const h2 = document.createElement("div")

h.textContent = "Hi"
h2.textContent = "i am div"


hello.appendChild(h)
h.appendChild(h2)


 */


/*
使用DOM 刪除元素

const btn = document.querySelector("#removeBtn")

btn.addEventListener("click", ()=> {
    const lastOne = document.querySelector("li:last-child")
    const u = document.querySelector("ul")

    u.removeChild(lastOne)

// console.log(lastOne);

})

*/
/**
 取得上一層元素 ==>  .parentElement 
 取得上一個Node ==>  .parentNode 
                .previousElementSibling
                .nextElementsibling

在指定位置安裝DOM元素
    .insertAdjacentElement  ==> 新增元素

    li.insertAdjacentElement("beforebegin", li)

    beforebegin, afterbegin


 */



    const ul= document.querySelector("ul")

    const li= document.querySelector("li")
    
    
    li.textContent = "x"
    
    ul.insertAdjacentElement("beforebegin", li)
    