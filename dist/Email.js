"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("preact/jsx-runtime");
const Grid_1 = require("./layout/Grid");
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
function Email({ data }) {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: style.container }, { children: (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ style: style.main }, { children: (0, jsx_runtime_1.jsxs)(Title_1.default, { children: ["Weather report for ", data.city] }, void 0) }), void 0) }), void 0));
}
exports.default = Email;
