import React from "react";

const Select = ({ className = "", error, children, ...props }) => {
  return (
    <>
      <select
        className={`form-select ${error ? "border-danger-500 focus:border-danger-500 focus:ring-danger-500/20" : ""} ${className}`.trim()}
        {...props}
      >
        {children}
      </select>
      {error && <p className="form-error">{error}</p>}
    </>
  );
};

export default Select;
