import React from "react";
import type { FallbackRegistry, Node } from "../types/FallbackRegistry";
import { resolveElement } from "./resolveElement";
import { AutoSuspense } from "../components";

export function renderNode(
  node: Node,
  childMap: Map<string | null, Node[]>,
  registry: FallbackRegistry,
): React.ReactElement | null {
  const children = childMap.get(node.id) ?? [];
  const resolvedEle = resolveElement(node.element, registry);
  if (!resolvedEle) return null;

  const renderedChildren = children.map((child) =>
    renderNode(child, childMap, registry),
  );

  if (node.isBoundary) {
    return (
      <AutoSuspense
        key={node.id}
        prefab={Object.fromEntries(registry.prebuild)}
      >
        {React.cloneElement(resolvedEle, {}, renderedChildren)}
      </AutoSuspense>
    );
  }

  return React.cloneElement(resolvedEle, { key: node.id }, renderedChildren);
}
