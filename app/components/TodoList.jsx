var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodods = function () {
            return todos.map(function (todo){
                return (
                    <Todo key={todo.id} {...todo}/>
                )

            });

        };
        return (
            <div>
                {renderTodods()}
            </div>
        );
    }
});

module.exports = TodoList;