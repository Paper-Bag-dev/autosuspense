import * as React from "react";
import { FallbackContext } from "../types/FallbackRegistry";
let globalId = 0;
function generateGlobalFallbackId() {
    globalId += 1;
    return `as-global-${globalId}`;
}
export function useCompatId() {
    // React 18 path
    const ReactObj = typeof React === "object" && React !== null ? React : window.React;
    if (typeof ReactObj.useId === "function") {
        return ReactObj.useId();
    }
    // React 16/17 fallback
    const ctx = React.useContext(FallbackContext);
    const idRef = React.useRef(null);
    if (idRef.current === null) {
        idRef.current = ctx?.generateId() ?? generateGlobalFallbackId();
    }
    return idRef.current;
}
