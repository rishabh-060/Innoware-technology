import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error = "",
  icon: Icon, // pass icon component (optional)
  className = "",
}) => {
  return (
    <div className={`w-full flex flex-col gap-1 ${className}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-300 mb-1"
        >
          {label}
        </label>
      )}

      {/* Input wrapper for icon support */}
      <div className="relative">
        {Icon && (
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Icon size={18} />
          </span>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-200 
            placeholder-gray-500 border border-gray-700 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            transition disabled:opacity-50 disabled:cursor-not-allowed
            ${Icon ? "pl-10" : ""}
            ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
