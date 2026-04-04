import * as React from "react";
export function resolveElement(descriptor, registry) {
    if (React.isValidElement(descriptor)) {
        return descriptor;
    }
    if (typeof descriptor === "function") {
        return React.createElement(descriptor);
    }
    if (typeof descriptor === "string") {
        const value = registry.prebuild.get(descriptor);
        if (!value)
            return null;
        if (React.isValidElement(value)) {
            return value;
        }
        const Component = value;
        return React.createElement(Component);
    }
    return null;
}
