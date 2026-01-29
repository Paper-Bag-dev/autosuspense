import { useContext, type ReactElement } from "react";
import { FallbackContext } from "../types/FallbackRegistry";
import { useCompatId } from "./useCompatId";

export function useSuspenseFallback(element: ReactElement): void {
  const registry = useContext(FallbackContext);
  const id = useCompatId();

  if (!registry) return;
  if (registry.nodes.has(id)) return;

  const parentId = registry.currentParent;

  registry.nodes.set(id, {
    id,
    element,
    parent: parentId,
  });

  registry.currentParent = id;
}
