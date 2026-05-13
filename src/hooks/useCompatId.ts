import * as React from "react";
import { FallbackContext } from "../types/FallbackRegistry";

let globalId = 0;

function generateGlobalFallbackId() {
  globalId += 1;
  return `as-global-${globalId}`;
}

export function useCompatId(): string {
  // React 18 path
  const ReactObj = typeof React === "object" && React !== null ? React : (window as any).React;
  if (typeof (ReactObj as any).useId === "function") {
    return (ReactObj as any).useId();
  }

  // React 16/17 fallback
  const ctx = React.useContext(FallbackContext);
  const idRef = React.useRef<string | null>(null);

  if (idRef.current === null) {
    idRef.current = ctx?.generateId() ?? generateGlobalFallbackId();
  }

  return idRef.current;
}
