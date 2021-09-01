"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEmailTpl = exports.sayGoodbye = exports.sayHello = void 0;
const react_1 = require("react");
const server_1 = require("react-dom/server");
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
    const emailElement = react_1.default.createElement(Email_1.default, { data: { city: 'Email' } });
    const content = server_1.default.renderToStaticMarkup(emailElement);
    return content;
}
exports.generateEmailTpl = generateEmailTpl;
