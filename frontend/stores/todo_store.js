var _todos = [];
var _callbacks = [];

var TodoStore = {
  changed: function () {
    _callbacks.forEach( function (callback) {
        callback();
    });
  },

  addChangedHandler: function (cb) {
    _callbacks.push(cb);
  },

  removeChangedHandler: function (cb) {
    var idx = _callbacks.findIndex(cb);
    _callbacks = _callbacks.splice(idx, 1);
  },

  all: function () {
    return _todos;
  },

  fetch: function () {
    $.get ("/api/todos", function (data) {
      _todos = data;
      TodoStore.changed();
    });
  },

  create: function(todo){
    $.post('/api/todos', todo, function(data){
      _todos.push(data);
      TodoStore.changed();
    });
  },

  handlerDestroy: function(idx){
      _todos.splice(idx, 1);
      TodoStore.changed();
  },

  destroy: function (id) {
    var idx = null;
    _todos.forEach(function (el, i) {
      if (el.id === id) {
        idx = i;
      }
    });
    // debugger

    if (idx >= 0) {
      $.ajax({
        url: '/api/todos/' + id,
        method: "DELETE",
        dataType: "JSON",
        success: this.handlerDestroy.bind(this, idx)
      });
    }
  },

  handlerUpdate: function(idx){

    TodoStore.changed();
  },

  toggleDone: function(id){
    var idx = null;
    _todos.forEach(function (el, i) {
      if (el.id === id) {
        idx = i;
      }
    });
    // debugger

    if (idx >= 0) {
      _todos[idx].done = !_todos[idx].done;
      $.ajax({
        url: '/api/todos/' + id,
        method: "PATCH",
        data: {todo: _todos[idx]},
        dataType: "JSON",
        success: this.handlerUpdate.bind(this, idx)
      });
    }
  }


};


module.exports = TodoStore;
