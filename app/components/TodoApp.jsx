var React = require('react');
var TodoList = require('TodoList');

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
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
});

module.exports = TodoApp;