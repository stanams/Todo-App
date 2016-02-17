var React = require('react');
var TodoStore = require('./stores/todo_store');

var DoneButton = React.createClass({
  handleDone: function(){
    TodoStore.toggleDone(this.props.listItem.id);
  },

  render: function(){
    // debugger
    var status = this.props.listItem.done ? 'Undo' : 'Done';

    return(
      <button onClick={this.handleDone}>{status}</button>
    );
  }
});

module.exports = DoneButton;
