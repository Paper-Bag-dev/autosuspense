import * as React from "react";
import "./List.css";

type ListProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const List: React.FC<ListProps> = ({ children, className, style }) => {
  return (
    <div className={`as-list ${className ?? ""}`} style={style} data-as-list>
      {children}
    </div>
  );
};
