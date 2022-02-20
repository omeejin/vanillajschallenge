const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDoArray = [];

function addtoDoArray() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}

function removeTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDoArray = toDoArray.filter((toDoArray) => toDoArray.id !== parseInt(li.id));
    addtoDoArray();
}

function fillTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", removeTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDoArray.push(newTodoObj);
    fillTodo(newTodoObj);
    addtoDoArray();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDoArray = parsedTodos;
    parsedTodos.forEach(fillTodo);
}