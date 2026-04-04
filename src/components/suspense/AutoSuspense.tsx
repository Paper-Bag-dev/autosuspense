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
    prebuild: new Map(Object.entries(prefab)),
  });

  const fallback = <GeneratedFallback registry={registryRef.current} />;

  return (
    <FallbackContext.Provider
      value={{
        registry: registryRef.current,
        parentId: null,
      }}
    >
      <React.Suspense fallback={fallback}>{children}</React.Suspense>
    </FallbackContext.Provider>
  );
};
