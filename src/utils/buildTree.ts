import type { Node } from "../types/FallbackRegistry";

export function buildTree(nodes: Map<string, Node>) {
  const childMap = new Map<string | null, Node[]>();

  for (const node of nodes.values()) {
    const list = childMap.get(node.parent) ?? [];
    list.push(node);
    childMap.set(node.parent, list);
  }
  return childMap;
}
