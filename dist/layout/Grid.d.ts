/// <reference types="react" />
declare function Grid({ children, style }: {
    children: any;
    style?: {};
}): JSX.Element;
declare namespace Grid {
    var Row: ({ children, style }: {
        children: any;
        style?: {};
    }) => JSX.Element;
    var Cell: ({ children, style, className }: {
        children: any;
        style?: {};
        className: any;
    }) => JSX.Element;
}
export default Grid;
