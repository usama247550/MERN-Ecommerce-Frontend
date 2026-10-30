import React from "react";

const Card = ({
  children,
  hover = false,
  className = "",
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      className={`${hover ? "ui-card-hover" : "ui-card"} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
