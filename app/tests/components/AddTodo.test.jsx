var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe("AddTodo", () => {
    it("should exist", () =>{
        expect(AddTodo).toExist();
    });

    it("should call newTodo prop with valid data", () =>{
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo newTodo={spy}/>);
        var $el = $(ReactDom.findDOMNode(addTodo));
        addTodo.refs.todoItem.value = 'Check Mail';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith('Check Mail');
    });

});