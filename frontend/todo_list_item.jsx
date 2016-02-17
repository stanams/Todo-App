var React = require('react');
var TodoStore = require('./stores/todo_store');
var DoneButton = require('./done_button');

var TodoListItem = React.createClass ({

    handleDestroy: function(){
      TodoStore.destroy(this.props.todoItem.id);
    },

    render: function () {
      return (
        <div>
          <div>{this.props.todoItem.title}</div>
          <div>{this.props.todoItem.body}</div>
          <button onClick={this.handleDestroy}>Delete</button>
          <DoneButton listItem={this.props.listItem}/>
        </div>
      );
    }
});

module.exports = TodoListItem;
