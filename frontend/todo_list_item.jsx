var React = require('react');

var TodoListItem = React.createClass ({
    render: function () {
      return (
        <div>
          <div>{this.props.todoItem.title}</div>
          <div>{this.props.todoItem.body}</div>
        </div>
      );
    }
});

module.exports = TodoListItem;
