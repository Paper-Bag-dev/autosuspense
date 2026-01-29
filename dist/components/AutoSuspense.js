import * as React from "react";
import { FallbackContext, } from "../types/FallbackRegistry";
import { GeneratedFallback } from "./GeneratedFallback";
export const AutoSuspense = ({ children }) => {
    const registryRef = React.useRef({
        nodes: new Map(),
        currentParent: null,
    });
    if (registryRef.current === null) {
        registryRef.current = {
            nodes: new Map(),
            currentParent: null,
        };
    }
    const fallback = React.createElement(GeneratedFallback, { registry: registryRef.current });
    return (React.createElement(FallbackContext.Provider, { value: registryRef.current },
        React.createElement(React.Suspense, { fallback: fallback }, children)));
};
