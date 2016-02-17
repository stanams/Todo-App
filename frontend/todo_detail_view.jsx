var React = require('react');


var TodoDetailView = React.createClass({
  render: function(){
    return(
      <div>
        <div>{this.props.todoItem.body}</div>
        <button onClick={this.props.lowerHandleDestroy}>Delete</button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
