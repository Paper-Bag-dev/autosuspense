import * as React from "react";
import {
  FallbackContext,
  type FallbackRegistry,
} from "../types/FallbackRegistry";
import { GeneratedFallback } from "./GeneratedFallback";

export const AutoSuspense = ({ children }: { children: React.ReactNode }) => {
  const registryRef = React.useRef<FallbackRegistry>({
    nodes: new Map(),
    currentParent: null,
  });

  if (registryRef.current === null) {
    registryRef.current = {
      nodes: new Map(),
      currentParent: null,
    };
  }
  const fallback = <GeneratedFallback registry={registryRef.current} />;

  return (
    <FallbackContext.Provider value={registryRef.current}>
      <React.Suspense fallback={fallback}>{children}</React.Suspense>
    </FallbackContext.Provider>
  );
};
