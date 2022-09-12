const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}
function paintToDo(newTodo) {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");
    newButton.innerText = "X";
    newButton.addEventListener("click", deleteToDo);
    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);
    newSpan.innerText = newTodo;
    toDoList.appendChild(newLi);
}

function handleToToSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}
 
toDoForm.addEventListener("submit", handleToToSubmit);