import React from "react";

const FormGroup = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`.trim()}>{children}</div>
  );
};

export default FormGroup;
