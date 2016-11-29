var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

export var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodods = function () {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>

                );
            }
            return todos.map(function (todo){
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
        return {
            todos: state.todos
        };

    }
)(TodoList);