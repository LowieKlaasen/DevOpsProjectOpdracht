const express = require('express')
const app = express()
const port = 3000;
const verify = require('./verify');

const useMySQL = process.env.STORAGE && process.env.STORAGE === 'mysql';
const todo = useMySQL ? require('./todo-mysql') : require('./todo-inmemory');

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
})

app.get('/todo-api/todos', todo.getTodos);
app.post('/todo-api/todos', todo.addTodo);
app.put('/todo-api/todos/:id', todo.updateTodo);
app.delete('/todo-api/todos/:id', todo.deleteTodo)

app.post

app.get('/todo-api/verify', verify.verify);

app.listen(port, () => {
  console.log(`Todo api listening on port ${port}`)
})