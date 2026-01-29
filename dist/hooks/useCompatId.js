import * as React from "react";
let globalId = 0;
function generateFallbackId() {
    globalId += 1;
    return `as-${globalId}`;
}
export function useCompatId() {
    // React 18 path
    if (typeof React.useId === "function") {
        return React.useId();
    }
    // React 16/17 fallback
    const idRef = React.useRef(null);
    if (idRef.current === null) {
        idRef.current = generateFallbackId();
    }
    return idRef.current;
}
