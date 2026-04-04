import { jsx as _jsx } from "react/jsx-runtime";
import "./Card.css";
export const Card = ({ children, className, style }) => {
    return (_jsx("div", { className: `as-card ${className ?? ""}`, style: style, "data-as-card": true, children: children }));
};
