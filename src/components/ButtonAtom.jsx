import React from "react";

const ButtonAtom = ({
  children,
  type = "button",
  variant = "primary", // primary | secondary | outline | danger
  size = "md", // sm | md | lg
  fullWidth = false,
  disabled = false,
  icon: Icon, // optional icon
  onClick,
  className = "",
}) => {
  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Variant classes
  const variantClasses = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-blue-500/30",
    secondary:
      "bg-gray-700 hover:bg-gray-800 text-white shadow-md hover:shadow-gray-500/30",
    outline:
      "border border-gray-600 hover:border-blue-500 text-gray-200 hover:text-blue-400",
    danger:
      "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-red-500/30",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2 rounded-lg font-medium 
        transition duration-300 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-blue-500
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default ButtonAtom;
