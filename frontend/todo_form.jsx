var React = require('react');
var TodoStore = require('./stores/todo_store');

var TodoForm = React.createClass({
  getInitialState: function(){
    return {title: "", body: ""};
  },

  updateTitle: function(e){
    this.setState({title: e.target.value});
  },

  updateBody: function(e){
    this.setState({body: e.target.value});
  },

  createTodo: function(e){
    e.preventDefault();
    var newTodo = {
      todo: {title: this.state.title, body: this.state.body}
    };

    TodoStore.create(newTodo);

    this.setState({
      title: '',
      body: ''
    });

  },

  render: function () {
    return (
      <form onSubmit={this.createTodo}>
          Title:
          <input onChange={this.updateTitle}
                 value={this.state.title} />
               Body:
          <input
            onChange={this.updateBody}
            value={this.state.body} />

          <input onSubmit={this.createTodo}
                 type="submit"
                 value="Create new task"/>
        </form>
    );
  }
});

module.exports = TodoForm;
