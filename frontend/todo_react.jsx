var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./todo_list');
TodoStore = require('./stores/todo_store');

ReactDOM.render(
  <TodoList/>,
  document.getElementById('main')
);
