var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState(){
      return {
          todos: [
              {
                  id: 1,
                  text: 'Walk the dark'
              }, {
                  id: 2,
                  text: 'Clean the yard'
              }
          ]

      };

    },
    handleAddTodo: function (item) {
        alert(item);

    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo newTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;