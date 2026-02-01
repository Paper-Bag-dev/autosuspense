import { jsx as _jsx } from "react/jsx-runtime";
import "./Block.css";
export const Block = ({ children, className, style }) => {
    return (_jsx("div", { className: `as-block ${className ?? ""}`, style: style, "data-as-block": true, children: children }));
};
