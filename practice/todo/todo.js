// 程式碼寫這裡
/*        <li class="todo-item">
          <span class="item">待辦事項1</span>
          <button class="closeBtn">X</button>
          </li>
    使用自串特性新增整段元素進去

element.insertAdjacentHTML(position, text);

'afterbegin': 在 element 裡面，第一個子元素之前。
'beforeend': 在 element 裡面，最後一個子元素之後。
'afterend': 在 element 之後

const API = "https://jsonplaceholder.typicode.com/photos?_limit=20"
const gallary = document.querySelector("#gallery")

fetch(API)
  .then((resp) => {
    return resp.json()
  })
  .then((photos) => {
    // 字串，變數 組合

    const getURL = (photo) => photo.thumbnailUrl
    const buildImage = (acc, url) => acc + `<img src="${url}" />`

    const str = photos.map(getURL).reduce(buildImage, "")

    // let str = ""
    // photos.forEach((photo) => {
    //   str = str + `<img src="${photo.thumbnailUrl}" />`
    //   // gallary.insertAdjacentHTML("beforeend", str)
    // })
    gallary.innerHTML = str

    // photos.forEach((photo) => {
    // const el = document.createElement("img")
    // const url = photo.thumbnailUrl
    // el.setAttribute("src", url)

    // gallary.appendChild(el)
    // })
  })

        
*/




document.addEventListener("DOMContentLoaded" , ()=>{

    const taskInput = document.querySelector("#taskInput")
    const addBtn = document.querySelector("#addBtn")
    const todoList = document.querySelector(".todo-list")


    const creatDotoitem = ()=>{
        const toDoitem = `<li class="todo-item">
                        <span class="item">待辦事項0</span>
                        <button class="closeBtn">X</button>
                        </li>`
    // 在ES6語法中，使用`...`轉換字串，裡面的字串可以用${} 當成變數
    /*   `<li class="todo-item">
            <span class="item">待辦事項0</span>
            <button class="closeBtn">X</button>
            </li>` 
        將  待辦事項0  ==> 改為${}，帶入tackinput所抓到的值
    */


        todoList.insertAdjacentHTML("afterbegin",toDoitem)


    }
    
    
    addBtn.addEventListener("click" ,()=> {
        // 當click後，要發生的事情
        
        creatDotoitem()
    
    
    
    
    })







})






