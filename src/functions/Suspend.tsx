import * as React from "react";
import { FallbackContext, FallbackDescriptor } from "../types/FallbackRegistry";
import { useCompatId } from "../hooks/useCompatId";

export function Suspend<T extends object>(
  Component: React.ComponentType<T>,
  fallback?: FallbackDescriptor,
) {
  return function Wrapped(props: T) {
    const ctx = React.useContext(FallbackContext);
    const id = useCompatId();

    if (!ctx) {
      return <Component {...props} />;
    }

    const { registry, parentId } = ctx;

    if (!registry.nodes.has(id)) {
      registry.nodes.set(id, {
        id,
        element: fallback ?? (Component as React.ComponentType<any>),
        parent: parentId,
      });
    }

    return (
      <FallbackContext.Provider value={{ registry, parentId: id }}>
        <Component {...props} />
      </FallbackContext.Provider>
    );
  };
}
