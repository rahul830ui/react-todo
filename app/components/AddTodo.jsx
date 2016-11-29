var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


export var AddTodo = React.createClass({
    handleTodo: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoItem = this.refs.todoItem.value;
        if (todoItem.length > 0) {
            this.refs.todoItem.value = '';
            dispatch(actions.addTodo(todoItem));
        } else {
            this.refs.todoItem.focus();
        }


    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleTodo}>
                    <input type="text" ref='todoItem' placeholder="What do you need to do" className=""/>
                    <button type="submit" className="button expanded">Add Todo</button>
                </form>
            </div>

        );
    }
});

export default connect()(AddTodo);