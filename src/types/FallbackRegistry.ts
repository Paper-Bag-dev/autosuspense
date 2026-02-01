import * as React from "react";

export type Node = {
  id: string;
  element: FallbackDescriptor;
  parent: string | null;
};

export type FallbackRegistry = {
  nodes: Map<string, Node>;
  currentParent: string | null;
  prebuild: Map<string, React.ReactElement | React.ComponentType<any>>;
};

export type FallbackDescriptor =
  | string
  | React.ReactElement
  | React.ComponentType;

export const FallbackContext = React.createContext<FallbackRegistry | null>(
  null,
);
