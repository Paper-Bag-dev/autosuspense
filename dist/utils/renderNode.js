import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { resolveElement } from "./resolveElement";
import { AutoSuspense } from "../components";
export function renderNode(node, childMap, registry) {
    const children = childMap.get(node.id) ?? [];
    const resolvedEle = resolveElement(node.element, registry);
    if (!resolvedEle)
        return null;
    const renderedChildren = children.map((child) => renderNode(child, childMap, registry));
    if (node.isBoundary) {
        return (_jsx(AutoSuspense, { prefab: Object.fromEntries(registry.prebuild), children: React.cloneElement(resolvedEle, {}, renderedChildren) }, node.id));
    }
    return React.cloneElement(resolvedEle, { key: node.id }, renderedChildren);
}
