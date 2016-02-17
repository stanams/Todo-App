var React = require('react');
var TodoStore = require('./stores/todo_store');
var DoneButton = require('./done_button');
var TodoDetailView = require('./todo_detail_view');

var TodoListItem = React.createClass ({
    getInitialState: function(){
      return {returned: false};
    },

    handleDestroy: function(){
      TodoStore.destroy(this.props.todoItem.id);
    },

    handleClick: function(e){
      if (this.state.returned) {
        this.setState({returned: false});
      } else {
        this.setState({returned: true});
      }
    },

    render: function () {
      var tdv = this.state.returned ? <TodoDetailView todoItem={this.props.todoItem} lowerHandleDestroy={this.handleDestroy} /> : "";

      return (
        <div>
          <div onClick={this.handleClick}>{this.props.todoItem.title}</div>
          {tdv}
          <DoneButton listItem={this.props.listItem}/>
        </div>
      );
    }
});

module.exports = TodoListItem;
