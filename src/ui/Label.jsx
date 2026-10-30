import React from "react";

const Label = ({ children, htmlFor, className = "", ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`form-label ${className}`.trim()}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
