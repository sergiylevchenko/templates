"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Grid_1 = require("../layout/Grid");
const style = {
    wrapper: {
        width: 'auto',
        margin: '0 auto',
    },
    title: {
        fontSize: '24px',
        // fontWeight: 'bold',
        marginTop: '5px',
        marginBottom: '10px',
    },
};
function Title({ children }) {
    return ((0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ style: style.wrapper }, { children: (0, jsx_runtime_1.jsx)("h1", Object.assign({ style: style.title, className: "title-heading" }, { children: children }), void 0) }), void 0));
}
exports.default = Title;
