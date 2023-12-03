// Sample data for testing
let todos = [
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Read a book" },
    // Add more sample todos as needed
];

// Function to render todos on the page
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span>${todo.text}</span>
            <div>
                <button onclick="editTodo(${todo.id})">Edit</button>
                <button onclick="deleteSingleTodo(${todo.id})">Delete</button>
            </div>
        `;
        todoList.appendChild(todoItem);
    });
}

// Function to add a new todo
function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const newTodoText = newTodoInput.value.trim();

    if (newTodoText !== '') {
        const newTodo = { id: todos.length + 1, text: newTodoText };
        todos.push(newTodo);
        renderTodos();
        newTodoInput.value = '';
    }
}

// Function to delete all todos
function deleteAllTodos() {
    todos = [];
    renderTodos();
}

// Function to edit a todo
function editTodo(todoId) {
    const editedText = prompt('Edit Todo:', todos.find(todo => todo.id === todoId).text);

    if (editedText !== null) {
        todos = todos.map(todo => (todo.id === todoId ? { ...todo, text: editedText } : todo));
        renderTodos();
    }
}

// Function to delete a single todo
function deleteSingleTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId);
    renderTodos();
}

// Initial render
renderTodos();
