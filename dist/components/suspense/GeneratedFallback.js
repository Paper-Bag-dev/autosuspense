import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { buildTree } from "../../utils/buildTree";
import { renderNode } from "../../utils/renderNode";
export function GeneratedFallback({ registry, }) {
    const tree = buildTree(registry.nodes);
    const roots = tree.get(null) ?? [];
    return (_jsx(React.Fragment, { children: roots.map((node) => renderNode(node, tree, registry)) }));
}
