import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { GeneratedFallback } from "./GeneratedFallback";
import { FallbackContext, } from "../../types/FallbackRegistry";
import { defaultPrefab } from "../prefabs/defaultPrefab";
export const AutoSuspense = ({ children, prefab = defaultPrefab, }) => {
    const registryRef = React.useRef({
        nodes: new Map(),
        prebuild: new Map(Object.entries(prefab)),
    });
    const fallback = _jsx(GeneratedFallback, { registry: registryRef.current });
    return (_jsx(FallbackContext.Provider, { value: {
            registry: registryRef.current,
            parentId: null,
        }, children: _jsx(React.Suspense, { fallback: fallback, children: children }) }));
};
