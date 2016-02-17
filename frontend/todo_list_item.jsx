var React = require('react');
var TodoStore = require('./stores/todo_store');

var TodoListItem = React.createClass ({

    handleDestroy: function(){
      TodoStore.destroy();
    },

    render: function () {
      return (
        <div>
          <div>{this.props.todoItem.title}</div>
          <div>{this.props.todoItem.body}</div>
          <button onClick={this.handleDestroy}>Delete</button>
        </div>
      );
    }
});

module.exports = TodoListItem;
