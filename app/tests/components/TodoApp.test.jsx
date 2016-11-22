var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe("TodoApp", () => {
    it("should exist", () =>{
        expect(TodoApp).toExist();
    });
});