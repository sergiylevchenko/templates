"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const tableStyle = {
    table: {
        width: '100%',
        // borderCollapse: 'collapse',
    },
};
function Cell({ children, style = {}, className }) {
    return (0, jsx_runtime_1.jsx)("td", Object.assign({ style: style, className: className }, { children: children }), void 0);
}
function Row({ children, style = {} }) {
    return ((0, jsx_runtime_1.jsx)("tr", Object.assign({ style: style }, { children: React.Children.map(children, (el) => {
            if (el.type === Cell)
                return el;
            return (0, jsx_runtime_1.jsx)("td", { children: el }, void 0);
        }) }), void 0));
}
function Grid({ children, style = {} }) {
    return ((0, jsx_runtime_1.jsx)("table", Object.assign({ style: { ...tableStyle.table, ...style } }, { children: (0, jsx_runtime_1.jsx)("tbody", { children: React.Children.map(children, (el) => {
                if (!el)
                    return;
                // We want this content the be on it's own row.
                if (el.type === Row)
                    return el;
                // The content is all inside a single cell (so a row)
                if (el.type === Cell) {
                    return (0, jsx_runtime_1.jsx)("tr", { children: el }, void 0);
                }
                // The content is one cell inside it's own row
                return ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { children: el }, void 0) }, void 0));
            }) }, void 0) }), void 0));
}
Grid.Row = Row;
Grid.Cell = Cell;
exports.default = Grid;
