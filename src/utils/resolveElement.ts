import * as React from "react";
import {
  FallbackDescriptor,
  FallbackRegistry,
} from "../types/FallbackRegistry";

export function resolveElement(
  descriptor: FallbackDescriptor,
  registry: FallbackRegistry,
): React.ReactElement | null {
  if (React.isValidElement(descriptor)) {
    return descriptor;
  }

  if (typeof descriptor === "function") {
    return React.createElement(descriptor);
  }

  if (typeof descriptor === "string") {
    const value = registry.prebuild.get(descriptor);
    if (!value) return null;

    if (React.isValidElement(value)) {
      return value;
    }

    const Component = value as React.ComponentType<any>;
    return React.createElement(Component);
  }

  return null;
}
