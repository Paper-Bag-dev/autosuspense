import * as React from "react";
import { FallbackRegistry } from "../../types/FallbackRegistry";
import { buildTree } from "../../utils/buildTree";
import { renderNode } from "../../utils/renderNode";

export function GeneratedFallback({
  registry,
}: {
  registry: FallbackRegistry;
}) {
  const tree = buildTree(registry.nodes);
  const roots = tree.get(null) ?? [];

  return (
    <React.Fragment>
      {roots.map((node) => renderNode(node, tree, registry))}
    </React.Fragment>
  );
}
