var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState(){
      return {
          showCompleaed: false,
          searchText: '',
          todos: [
              {
                  id: uuid(),
                  text: 'Walk the dark'
              }, {
                  id: uuid(),
                  text: 'Clean the yard'
              }
          ]

      };

    },
    handleAddTodo: function (item) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: item
                }
            ]
        })

    },
    handleSearch: function (showCompleaed, searchText) {
        this.setState({
            showCompleaed: showCompleaed,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSeach={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo newTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;