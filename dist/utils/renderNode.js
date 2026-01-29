import React from "react";
export function renderNode(node, childMap) {
    const children = childMap.get(node.id) ?? [];
    return React.cloneElement(node.element, undefined, children.map((child) => renderNode(child, childMap)));
}
