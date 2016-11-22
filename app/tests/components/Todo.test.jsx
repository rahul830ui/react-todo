var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Todo = require('Todo');

describe("Todo", () => {
    it("should exist", () =>{
        expect(Todo).toExist();
    });
});