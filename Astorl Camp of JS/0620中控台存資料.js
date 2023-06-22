const checklist = document.querySelector("#checklist")

function createCheckbox(n) {
  for (let i = 0; i < n; i++) {
    const cb = document.createElement("input")
    cb.setAttribute("type", "checkbox")
    cb.setAttribute("id", `todo-${i}`)

    cb.addEventListener("click", (e) => {
      const { id } = e.currentTarget

      const todos = localStorage.getItem("todos")

      if (todos === null) {
        const data = [{ id, completed: true }]
        localStorage.setItem("todos", JSON.stringify(data))
      } else {
        const data = JSON.parse(todos)
        const todo = data.find((d) => {
          return d.id === id
        })

        if (todo) {
          todo.completed = !todo.completed
          const idx = data.indexOf(todo)
          data[idx] = todo
        } else {
          const newTodo = [{ id, completed: true }]
          data.push(newTodo)
        }

        localStorage.setItem("todos", JSON.stringify(data))
      }

      console.log(localStorage)
    })

    checklist.appendChild(cb)
  }
}

createCheckbox(8)