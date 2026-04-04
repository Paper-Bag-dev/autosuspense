import { jsx as _jsx } from "react/jsx-runtime";
import "./List.css";
export const List = ({ children, className, style }) => {
    return (_jsx("div", { className: `as-list ${className ?? ""}`, style: style, "data-as-list": true, children: children }));
};
