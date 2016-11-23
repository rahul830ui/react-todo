var React = require('react');


var TodoSearch = React.createClass({
    handleSearch: function () {
        var showCompleted = this.refs.showCompleaed.checked;
        var searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchText);

    },
    render: function () {
        return (
            <div>
                <div>
                    <input type="search" ref='searchText' placeholder="Search Todo" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref='showCompleaed' onChange={this.handleSearch}/>
                        Show Compleated Todos
                    </label>

                </div>

            </div>

        );
    }
});

module.exports = TodoSearch;