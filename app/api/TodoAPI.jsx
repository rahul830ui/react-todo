var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }

    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
        }
        return $.isArray(todos) ? todos : [];

    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filterdTodos = todos;

        //Filter by showCompleted
        filterdTodos = filterdTodos.filter((todo) => {
            return !todo.completed || showCompleted;

        });

        //Filter by searchText
        filterdTodos = filterdTodos.filter((todo) => {
            return searchText.length == 0 || todo.text.toLowerCase().indexOf(searchText) > -1;

        });

        //sort todos with non-completed first
        filterdTodos.sort((a, b) => {
            if (!a.completed && b.completed){
                return -1;
            } else if (a.completed && !b.completed){
                return 1;
            } else {
                return 0;
            }
        });

        return filterdTodos;
    }

};