var Todo = require('../models/todo');

module.exports = {
    index,
    create,
    delete: deleteTodo

}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/');
}

function create(req, res) {
  req.body.done = false;
  console.log(req.body)
Todo.create(req.body);
res.redirect('/')
}

function index(req, res) {
    res.render('index', {
      todos: Todo.getAll(),
      
    });
  }