const todoInput = document.querySelector('#todoInput'),
addButton = document.querySelector('#addButton'),
todoList = document.querySelector('#todoList');

const todoObj = {
    todoData: [],
    removed: [],

    addTodo: function(value){
        if (value == ''){
        alert('Pleace enter your new task');
        return;
        };
        this.todoData.push(value);
        this.renderTodoList(this.todoData)
    },

    renderTodoList: function(todoData){
        const newtask = todoData.map((todo, index) => `<div class="task">
        <span id= "taskname" class="text-white fs-4 checked"> ${index + 1}. ${todo} </span>
        <img id="delete" onclick="todoObj.removeTodo(${index})" type="button" src="./icons/trash-can-solid.svg" alt="Delete">
        </div>`).join('');
        todoList.innerHTML = newtask;
    },

    removeTodo: function(todoIndex){
        this.removed.push(this.todoData[todoIndex]);
        const newTodoData = this.todoData.filter((item,index)=> index !==todoIndex);
        this.renderTodoList(newTodoData);
        this.todoData = newTodoData;
    }

};


addButton.addEventListener('click', function(){
    const value = todoInput.value;
    todoObj.addTodo(value);
    todoInput.value = '';
});

todoInput.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
        const value = todoInput.value;
        todoObj.addTodo(value);
        todoInput.value = '';
    }
});
console.log(todoObj);