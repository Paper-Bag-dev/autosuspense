import * as React from "react";

import { GeneratedFallback } from "./GeneratedFallback";
import {
  FallbackContext,
  FallbackRegistry,
} from "../../types/FallbackRegistry";
import { defaultPrefab } from "../prefabs/defaultPrefab";

export const AutoSuspense = ({
  children,
  prefab = defaultPrefab,
}: {
  children: React.ReactNode;
  prefab?: Record<string, React.ReactElement | React.ComponentType<any>>;
}) => {
  const registryRef = React.useRef<FallbackRegistry>({
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
  const fallback = <GeneratedFallback registry={registryRef.current} />;

  return (
    <FallbackContext.Provider value={registryRef.current}>
      <React.Suspense fallback={fallback}>{children}</React.Suspense>
    </FallbackContext.Provider>
  );
};
