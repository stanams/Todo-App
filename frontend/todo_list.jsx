var React = require('react');
var TodoStore = require('./stores/todo_store');
var TodoListItem = require('./todo_list_item');
var TodoForm = require('./todo_form');

var TodoList = React.createClass({
  getInitialState: function(){
    // debugger
    // TodoStore.fetch();
    return {allTodos: TodoStore.all()};
  },

  todoChanged: function(){
    this.setState({allTodos: TodoStore.all()});
  },

  componentDidMount: function(){
    TodoStore.addChangedHandler(this.todoChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function(){
    TodoStore.removeChangedHandler(this.todoChanged);
  },

  render: function(){
    var listItems = this.state.allTodos.map(function(el){
      return <TodoListItem listItem={el} key={el.id} todoItem={el}/>;
    }, this);
    // debugger
    return(
      <div>
        <TodoForm />
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }

});


module.exports = TodoList;
