import { useContext } from "react";
import { FallbackContext } from "../types/FallbackRegistry";
import { useCompatId } from "./useCompatId";
// Depricated hook, core logic changed
export function useSuspenseFallback(element) {
    const registry = useContext(FallbackContext);
    const id = useCompatId();
    if (!registry)
        return;
    if (registry.registry.nodes.has(id))
        return;
    const parentId = registry.parentId;
    registry.registry.nodes.set(id, {
        id,
        element,
        parent: parentId,
    });
    registry.parentId = id;
}
