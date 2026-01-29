import * as React from "react";
import { buildTree } from "../utils/buildTree";
import { renderNode } from "../utils/renderNode";
export function GeneratedFallback({ registry, }) {
    const tree = buildTree(registry.nodes);
    const roots = tree.get(null) ?? [];
    return (React.createElement(React.Fragment, null, roots.map((node) => renderNode(node, tree))));
}
