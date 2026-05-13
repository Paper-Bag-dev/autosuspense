import { jsx as _jsx } from "react/jsx-runtime";
import { Block } from "./prebuilt/Block";
import { Card } from "./prebuilt/Card";
import { List } from "./prebuilt/List";
export const defaultFallbacks = {
    block: _jsx(Block, {}),
    card: _jsx(Card, {}),
    list: _jsx(List, {}),
};
