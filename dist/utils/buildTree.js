export function buildTree(nodes) {
    const childMap = new Map();
    for (const node of nodes.values()) {
        const list = childMap.get(node.parent) ?? [];
        list.push(node);
        childMap.set(node.parent, list);
    }
    return childMap;
}
