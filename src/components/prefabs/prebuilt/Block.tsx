import * as React from "react";
import "./Block.css";

type BlockProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Block: React.FC<BlockProps> = ({ children, className, style }) => {
  return (
    <div className={`as-block ${className ?? ""}`} style={style} data-as-block>
      {children}
    </div>
  );
};
