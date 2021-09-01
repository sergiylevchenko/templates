"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEmailTpl = exports.sayGoodbye = exports.sayHello = void 0;
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Email_1 = require("./Email");
function sayHello() {
    console.log('hi');
}
exports.sayHello = sayHello;
function sayGoodbye() {
    console.log('goodbye');
}
exports.sayGoodbye = sayGoodbye;
function generateEmailTpl() {
    const emailElement = React.createElement(Email_1.default, { data: { city: 'Email' } });
    const content = ReactDOMServer.renderToStaticMarkup(emailElement);
    return content;
}
exports.generateEmailTpl = generateEmailTpl;
