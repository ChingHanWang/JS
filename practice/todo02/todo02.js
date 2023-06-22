


const addBtn = document.querySelector("#addBtn")
const inPut = document.querySelector("#inPut")
const toDolist = document.querySelector("#toDolist")
// 抓到toDoList動態 在下方建立一個li
// const ul = document.querySelector(".deleteBtn")
// 想要deleteBtn有刪除功能

// const data = JSON.parse(localStorage.getItem("todos")) || []




addBtn.addEventListener("click", (e)=> {    
    addItem()
    
    
    inPut.value = ""
    inPut.focus()   
    // console.log(123);

    /*
        當監聽了Btn後，執行 addItem函數
        把input裡面的valu抓到後，宣告一個常數 ==> item

    */


})


const array = []


const addItem = ()=>{
    const item = inPut.value
    const newItem=  `<li class="newItem">              
                    <input class="checkbox" type="checkbox" name="checkbox">
                    <span class="item">待辦：${item}</span>
                    <button class="deleteBtn">Ｘ</button>
                    </li>`
        toDolist.insertAdjacentHTML("afterbegin", newItem)

    

    const data = { name:item, value:item }
    array.push(data)
    const dataOfjson = JSON.stringify(array)
    localStorage.setItem( "getItemdata",dataOfjson)


    /* 
    localStorage.setItem( getItemdata,dataOfjson)
    getItemdata 要跟 下列的localStorage.getItem("todos") 的todo一樣
    const data = JSON.parse(localStorage.getItem("todos")) || []
    */











}
        
                
    /*  `<li class="todo-item">
        <span class="item">待辦事項0</span>
        <button class="closeBtn">X</button>
        </li>` 
        將  待辦事項0  ==> 改為${}，帶入tackinput所抓到的值
        ==>
        element.insertAdjacentHTML(position, text);
        toDolist<ul>清單後面新增<li>input.value</li>
    */
// const getItem = 







        //    const list = [a, b, c]
        // toDolist.insertAdjacentHTML("afterbegin", newItem)
        // list.push(newItem)
        // localStorage.setItem("data", JSON.stringify(list))
        
        // console.log(newItem)


// toDolist.addEventListener("click",()=>{
//     // clear()
//     console.log(123)

// })




// const  clear = ()=>{

//     console.log(123)


// }














