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
function generateEmailTpl(type, params) {
    console.log(type);
    console.log(params);
    const emailElement = React.createElement(Email_1.default, { data: { city: 'Email' } });
    console.log(emailElement);
    console.log('------------');
    // const content = ReactDOMServer.renderToStaticMarkup(emailElement);
    const content = ReactDOMServer.renderToString(emailElement);
    return content;
}
exports.generateEmailTpl = generateEmailTpl;
