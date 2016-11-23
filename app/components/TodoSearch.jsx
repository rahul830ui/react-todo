var React = require('react');


var TodoSearch = React.createClass({
    handleSearch: function () {
        var showCompleaed = this.refs.showCompleaed.checked;
        var searchText = this.refs.searchText.value;
        this.props.onSeach(showCompleaed, searchText);

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