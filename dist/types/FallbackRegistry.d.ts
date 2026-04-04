import * as React from "react";
export type Node = {
    id: string;
    element: FallbackDescriptor;
    parent: string | null;
    isBoundary?: boolean;
};
export type FallbackRegistry = {
    nodes: Map<string, Node>;
    prebuild: Map<string, React.ReactElement | React.ComponentType<any>>;
};
export type FallbackDescriptor = string | React.ReactElement | React.ComponentType;
export type FallbackContextValue = {
    registry: FallbackRegistry;
    parentId: string | null;
};
export declare const FallbackContext: React.Context<FallbackContextValue | null>;
//# sourceMappingURL=FallbackRegistry.d.ts.map