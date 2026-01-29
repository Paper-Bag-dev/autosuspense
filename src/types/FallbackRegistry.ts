import { createContext, type ReactElement } from "react";

export type Node = {
  id: string;
  element: ReactElement;
  parent: string | null;
};

export type FallbackRegistry = {
  nodes: Map<string, Node>;
  currentParent: string | null;
};

export const FallbackContext = createContext<FallbackRegistry | null>(null);
