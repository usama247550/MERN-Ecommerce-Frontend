import React from "react";

const Loader = () => {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center bg-surface-muted">
      <div
        className="h-14 w-14 animate-spin-slow rounded-full border-[6px] border-gray-200 border-t-primary-600 border-b-primary-600 shadow-sm"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default Loader;
