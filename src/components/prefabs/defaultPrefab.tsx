import * as React from "react";
import { Block } from "./prebuilt/Block";
import { Card } from "./prebuilt/Card";
import { List } from "./prebuilt/List";

export const defaultPrefab: Record<string, React.ReactElement> = {
  block: <Block />,
  card: <Card />,
  list: <List />,
};
