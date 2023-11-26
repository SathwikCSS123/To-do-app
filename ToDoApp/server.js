const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use middleware to parse JSON in the request body
app.use(bodyParser.json());

// In-memory storage for tasks
let tasks = [];

// API endpoint to get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// API endpoint to add a task
app.post('/tasks', (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    res.json({ message: 'Task added successfully' });
});

// API endpoint to remove a task
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    tasks = tasks.filter((task, index) => index !== parseInt(taskId));
    res.json({ message: 'Task removed successfully' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
