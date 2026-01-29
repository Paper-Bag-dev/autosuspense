import { type ReactElement } from "react";
export type Node = {
    id: string;
    element: ReactElement;
    parent: string | null;
};
export type FallbackRegistry = {
    nodes: Map<string, Node>;
    currentParent: string | null;
};
export declare const FallbackContext: import("react").Context<FallbackRegistry | null>;
//# sourceMappingURL=FallbackRegistry.d.ts.map