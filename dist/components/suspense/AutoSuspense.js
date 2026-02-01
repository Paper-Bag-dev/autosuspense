import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { GeneratedFallback } from "./GeneratedFallback";
import { FallbackContext, } from "../../types/FallbackRegistry";
import { defaultPrefab } from "../prefabs/defaultPrefab";
export const AutoSuspense = ({ children, prefab = defaultPrefab, }) => {
    const registryRef = React.useRef({
        nodes: new Map(),
        currentParent: null,
        prebuild: new Map(Object.entries(prefab)),
    });
    if (registryRef.current === null) {
        registryRef.current = {
            nodes: new Map(),
            currentParent: null,
            prebuild: new Map(Object.entries(prefab)),
        };
    }
    const fallback = _jsx(GeneratedFallback, { registry: registryRef.current });
    return (_jsx(FallbackContext.Provider, { value: registryRef.current, children: _jsx(React.Suspense, { fallback: fallback, children: children }) }));
};
