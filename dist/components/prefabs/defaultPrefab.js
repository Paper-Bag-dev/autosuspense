import { jsx as _jsx } from "react/jsx-runtime";
import { Block } from "./prebuilt/Block";
import { Card } from "./prebuilt/Card";
import { List } from "./prebuilt/List";
export const defaultPrefab = {
    block: ({ children }) => _jsx(Block, { children: children }),
    card: ({ children }) => _jsx(Card, { children: children }),
    list: ({ children }) => _jsx(List, { children: children }),
};
