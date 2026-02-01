import * as React from "react";
import "./Card.css";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Card: React.FC<CardProps> = ({ children, className, style }) => {
  return (
    <div className={`as-card ${className ?? ""}`} style={style} data-as-card>
      {children}
    </div>
  );
};
