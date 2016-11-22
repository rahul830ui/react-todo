var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {text, id} = this.props;
        return (
            <div>
                <h2>{id}.  {text}</h2>

            </div>
        );
    }
});

module.exports = Todo;