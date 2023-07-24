const todoInput = document.querySelector('#todoInput'),
addButton = document.querySelector('#addButton'),
deleteBtn = document.querySelector('#deleteBtn')
todoList = document.querySelector('#todoList');

let todoData = [];

addButton.addEventListener('click', function(){
    addTodo();
});

todoInput.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
        addTodo();
    }
});

function  addTodo() {
    const value = todoInput.value;
    if (value == ''){
        alert('Pleace enter your new task');
        return;
    }
    todoData.push(value);
    todoInput.value = '';
   renderTodoList(todoData);
}
function removeTodo(todoIndex) {
    const newTodoData = todoData.filter((item,index)=> index !==todoIndex)
    renderTodoList(newTodoData);
    todoData= newTodoData;
}
function renderTodoList(params) {
    const newtask = todoData.map((todo, index) => `<div class="task"> 
    <img id="done" type="button" src="./icons/circle-check-regular.svg" alt="Done">
    <span id= "taskname" class="text-white fs-4 checked"> ${index + 1}. ${todo} </span>
    <img id="delete" onclick="removeTodo(${index})" type="button" src="./icons/trash-can-solid.svg" alt="Delete">
    </div>`).join('');
    todoList.innerHTML = newtask;
    

}

