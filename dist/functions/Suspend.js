import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { FallbackContext } from "../types/FallbackRegistry";
import { useCompatId } from "../hooks/useCompatId";
export function Suspend(Component, fallback) {
    return function Wrapped(props) {
        const ctx = React.useContext(FallbackContext);
        const id = useCompatId();
        if (!ctx) {
            return _jsx(Component, { ...props });
        }
        const { registry, parentId } = ctx;
        if (!registry.nodes.has(id)) {
            registry.nodes.set(id, {
                id,
                element: fallback ?? Component,
                parent: parentId,
            });
        }
        return (_jsx(FallbackContext.Provider, { value: {
                registry,
                parentId: id,
                generateId: ctx.generateId,
            }, children: _jsx(Component, { ...props }) }));
    };
}
