import React, { Suspense } from "react";
import type { FallbackRegistry, Node } from "../types/FallbackRegistry";
import { resolveElement } from "./resolveElement";
import { Block } from "../components/prefabs/prebuilt/Block";

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
      <Suspense key={node.id} fallback={<Block />}>
        {React.cloneElement(resolvedEle, {}, renderedChildren)}
      </Suspense>
    );
  }

  return React.cloneElement(resolvedEle, { key: node.id }, renderedChildren);
}
