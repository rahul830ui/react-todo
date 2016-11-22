var React = require('react');


var AddTodo = React.createClass({
    handleTodo: function (e) {
        e.preventDefault();
        var todoItem = this.refs.todoItem.value;
        if (todoItem.length > 0) {
            this.refs.todoItem.value = '';
            this.props.newTodo(todoItem);
        } else {
            this.refs.todoItem.focus();
        }


    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.handleTodo}>
                    <input type="text" ref='todoItem' placeholder="What do you need to do" className=""/>
                    <button type="submit" className="button expanded">Add Todo</button>
                </form>
            </div>

        );
    }
});

module.exports = AddTodo;