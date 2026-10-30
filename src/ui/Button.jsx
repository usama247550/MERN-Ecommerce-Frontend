import React from "react";

const variantClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
  danger: "btn-danger",
  ghost: "btn-ghost",
};

const sizeClasses = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  type = "button",
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || ""} ${loading ? "btn-loading" : ""} ${className}`.trim()}
      {...props}
    >
      {loading && (
        <span
          className="inline-block h-4 w-4 animate-spin-slow rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  );
};

export default Button;
