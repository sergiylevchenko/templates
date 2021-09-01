"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Title_1 = require("./elements/Title");
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
    console.log('render Email');
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Title_1.default, { children: " Test title " }, void 0) }, void 0));
};
exports.default = Email;
