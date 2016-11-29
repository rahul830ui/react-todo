var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodods = function () {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>

                );
            }
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map(function (todo){
                return (
                    <Todo key={todo.id}{...todo}/>
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

export default connect(
    (state) => {
        return state;
    }
)(TodoList);