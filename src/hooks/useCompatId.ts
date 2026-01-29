import * as React from "react";

let globalId = 0;

function generateFallbackId() {
  globalId += 1;
  return `as-${globalId}`;
}

export function useCompatId(): string {
  // React 18 path
  if (typeof (React as any).useId === "function") {
    return (React as any).useId();
  }

  // React 16/17 fallback
  const idRef = React.useRef<string | null>(null);

  if (idRef.current === null) {
    idRef.current = generateFallbackId();
  }

  return idRef.current;
}
