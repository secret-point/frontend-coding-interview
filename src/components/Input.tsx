import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <label className="flex flex-col gap-4 w-full">
      {label && <span className="text-sm text-gray-700">{label}</span>}
      <input
        className={`rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand border-gray-300 ${
          error ? "border-red-400" : ""
        } ${className || ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.name}-error` : undefined}
        {...props}
      />
      {error && (
        <span
          id={`${props.name}-error`}
          className="text-xs text-red-500"
          role="alert"
        >
          {error}
        </span>
      )}
    </label>
  );
}
