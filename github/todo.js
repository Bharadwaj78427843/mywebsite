document.getElementById('add-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        const todoContent = document.createElement('span');
        todoContent.textContent = todoText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        todoItem.appendChild(todoContent);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
        todoInput.value = '';
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });
    }
});
