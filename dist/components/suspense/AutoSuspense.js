import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { GeneratedFallback } from "./GeneratedFallback";
import { FallbackContext, } from "../../types/FallbackRegistry";
import { defaultFallbacks } from "../prefabs/defaultFallbacks";
export const AutoSuspense = ({ children, fallbacks = defaultFallbacks, }) => {
    const registryRef = React.useRef({
        nodes: new Map(),
        prebuild: new Map(Object.entries(fallbacks)),
    });
    const counterRef = React.useRef(0);
    const generateId = React.useCallback(() => {
        counterRef.current++;
        return `as-${counterRef.current}`;
    }, []);
    const fallback = _jsx(GeneratedFallback, { registry: registryRef.current });
    return (_jsx(FallbackContext.Provider, { value: {
            registry: registryRef.current,
            parentId: null,
            generateId,
        }, children: _jsx(React.Suspense, { fallback: fallback, children: children }) }));
};
