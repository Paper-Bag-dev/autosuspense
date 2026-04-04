import { jsx as _jsx } from "react/jsx-runtime";
import React, { Suspense } from "react";
import { resolveElement } from "./resolveElement";
import { Block } from "../components/prefabs/prebuilt/Block";
export function renderNode(node, childMap, registry) {
    const children = childMap.get(node.id) ?? [];
    const resolvedEle = resolveElement(node.element, registry);
    if (!resolvedEle)
        return null;
    const renderedChildren = children.map((child) => renderNode(child, childMap, registry));
    if (node.isBoundary) {
        return (_jsx(Suspense, { fallback: _jsx(Block, {}), children: React.cloneElement(resolvedEle, {}, renderedChildren) }, node.id));
    }
    return React.cloneElement(resolvedEle, { key: node.id }, renderedChildren);
}
