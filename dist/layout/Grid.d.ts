declare function Grid({ children, style }: {
    children: any;
    style?: {};
}): import("preact").JSX.Element;
declare namespace Grid {
    var Row: ({ children, style }: {
        children: any;
        style?: {};
    }) => import("preact").JSX.Element;
    var Cell: ({ children, style, className }: {
        children: any;
        style?: {};
        className: any;
    }) => import("preact").JSX.Element;
}
export default Grid;
