document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${taskInput.value} <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;
    taskList.appendChild(li);

    saveTask(taskInput.value);
    taskInput.value = '';
}

function removeTask(button) {
    const taskText = button.parentNode.firstChild.nodeValue;

    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentNode);

    removeTaskFromStorage(taskText);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    taskList.innerHTML = '';

    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(li);
    });
}
