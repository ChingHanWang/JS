const inputText = document.querySelector('.input');
const add = document.querySelector('.add');
const list = document.querySelector('.list');
const deleteBtn = document.querySelector('ul');
const listNum = document.querySelector('.listNum');
const clean = document.querySelector('.cleanBTN');

let listData = JSON.parse(localStorage.getItem('todoList')) || [];

add.addEventListener('click', addList);
clean.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', handleListEvent);
inputText.addEventListener('keypress', handleKeyPress);

function handleKeyPress(e) {
  if (e.keyCode === 13) {
    addList();
  }
}

function addList() {
  const value = inputText.value.trim();
  if (!value) {
    return;
  }
  listData.push({
    text: value,
    status: false,
    id: listData.length
  });
  render();
  inputText.value = '';
}

function render() {
  let str = '';
  listData.forEach((item, i) => {
    item.id = i;
    str += `
            <li>
                <label class='checkbox ${item.status ? 'done' : ''}'>
                    <input type='checkbox' class='status' ${
                      item.status ? 'checked' : ''
                    } data-num=${i}>
                    <span>${item.text}</span>
                </label>
                <a href="" class='delete' data-num='${i}'>刪除</a>
            </li>
        `;
  });
  list.innerHTML = str;
  listNum.innerHTML = `目前有 ${listData.length} 筆任務`;


/*這段程式碼是一個用於渲染任務清單的函式。它的功能如下：

建立一個空字串 str。
使用 forEach 迴圈遍歷 listData 陣列中的每個元素 item。
將 item 的 id 設置為當前索引值 i，以便後續操作。
使用字串模板 (template literal) 的方式將每個任務項目的 HTML 結構添加到 str 中。
每個任務項目都是一個 <li> 元素，包含一個勾選框、任務文字和一個刪除連結。
勾選框的勾選狀態和索引值都被儲存在自定義屬性 data-num 中。
任務項目的完成狀態會影響到 checkbox 和 label 的 CSS 類名，已完成的任務會添加 done 類名。
迴圈結束後，將組合好的 HTML 字串 str 賦值給 list 元素的 innerHTML 屬性，這樣就會將任務清單顯示在網頁上。
將 listData 陣列的長度顯示在 listNum 元素中，顯示目前有多少筆任務。
使用 localStorage 將 listData 陣列轉換為 JSON 字串並儲存起來，以便後續的資料持久化。
簡而言之，這個函式的目的是根據 listData 陣列的內容生成任務清單的 HTML 結構，並將其顯示在網頁上，同時更新相關的計數和將任務清單儲存到瀏覽器的本地儲存中。
*/





  localStorage.setItem('todoList', JSON.stringify(listData));
}

function clearAll(e) {
  e.preventDefault();
  listData = [];
  render();
}

function handleListEvent(e) {
  e.preventDefault();
  if (e.target.nodeName === 'A') {
    listData = listData.filter((item, index) => index != e.target.dataset.num);
  } else if (e.target.nodeName === 'INPUT') {
    listData.forEach((item) => {
      if (e.target.dataset.num == item.id) {
        item.status = !item.status;
      }
    });
  }
  render();
}

render();
