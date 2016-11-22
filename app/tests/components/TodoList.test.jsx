var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe("TodoList", () => {
    it("should exist", () =>{
        expect(TodoList).toExist();
    });

    it("should render one component for each todo item", () =>{
        var todos = [{
            id: 1,
            text: 'Something'
        },{
            id: 2,
            text: 'Something one'
        },{
            id: 3,
            text: 'Something three'
        }];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponent.length).toBe(todos.length);
    });
});