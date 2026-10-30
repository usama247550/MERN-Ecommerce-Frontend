import React from "react";

const Input = ({ className = "", error, ...props }) => {
  return (
    <>
      <input
        className={`form-input ${error ? "border-danger-500 focus:border-danger-500 focus:ring-danger-500/20" : ""} ${className}`.trim()}
        {...props}
      />
      {error && <p className="form-error">{error}</p>}
    </>
  );
};

export default Input;
