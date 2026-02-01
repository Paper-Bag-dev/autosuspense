import { Block } from "./prebuilt/Block";
import { Card } from "./prebuilt/Card";
import { List } from "./prebuilt/List";
import { PrefabFactory } from "../../types/PrefabFactory";

export const defaultPrefab: Record<string, PrefabFactory> = {
  block: ({ children }) => <Block>{children}</Block>,
  card: ({ children }) => <Card>{children}</Card>,
  list: ({ children }) => <List>{children}</List>,
};
