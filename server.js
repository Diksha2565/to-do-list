const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.json(newTask);
});

app.put('/tasks/:index', (req, res) => {
    const index = req.params.index;
    tasks[index] = req.body;
    res.json(tasks[index]);
});

app.delete('/tasks/:index', (req, res) => {
    const index = req.params.index;
    tasks.splice(index, 1);
    res.json({ message: 'Task deleted' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
