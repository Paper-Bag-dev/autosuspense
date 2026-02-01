import React from "react";
import type { FallbackRegistry, Node } from "../types/FallbackRegistry";
import { resolveElement } from "./resolveElement";

export function renderNode(
  
  node: Node,
  childMap: Map<string | null, Node[]>,
  registry: FallbackRegistry,
): React.ReactElement | null {
  const children = childMap.get(node.id) ?? [];
  const resolvedEle = resolveElement(node.element, registry);
  if (!resolvedEle) return null;

  return React.cloneElement(
    resolvedEle,
    { key: node.id },
    children.map((child) => renderNode(child, childMap, registry)),
  );
}
