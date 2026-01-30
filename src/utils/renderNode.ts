import React from "react";
import type { Node } from "../types/FallbackRegistry";

export function renderNode(
  node: Node,
  childMap: Map<string | null, Node[]>,
): React.ReactElement {
  const children = childMap.get(node.id) ?? [];

  return React.cloneElement(
    node.element,
    { key: node.id },
    children.map((child) => renderNode(child, childMap)),
  );
}
