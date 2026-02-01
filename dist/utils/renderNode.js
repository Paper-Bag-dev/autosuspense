import React from "react";
import { resolveElement } from "./resolveElement";
export function renderNode(node, childMap, registry) {
    const children = childMap.get(node.id) ?? [];
    const resolvedEle = resolveElement(node.element, registry);
    if (!resolvedEle)
        return null;
    return React.cloneElement(resolvedEle, { key: node.id }, children.map((child) => renderNode(child, childMap, registry)));
}
