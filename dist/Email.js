"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("preact/jsx-runtime");
// import Title from './elements/Title';
const style = {
    container: {
        backgroundColor: '#efefef',
        padding: '20px 0',
        fontFamily: 'sans-serif',
    },
    main: {
        maxWidth: '500px',
        width: '100%',
    },
};
const Email = ({ data }) => {
    console.log('EMAIL');
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "TEST" }, void 0));
};
exports.default = Email;
