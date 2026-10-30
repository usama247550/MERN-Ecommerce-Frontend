import React from "react";

const Textarea = ({ className = "", error, ...props }) => {
  return (
    <>
      <textarea
        className={`form-textarea ${error ? "border-danger-500 focus:border-danger-500 focus:ring-danger-500/20" : ""} ${className}`.trim()}
        {...props}
      />
      {error && <p className="form-error">{error}</p>}
    </>
  );
};

export default Textarea;
