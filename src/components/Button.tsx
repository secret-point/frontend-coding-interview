import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:opacity-95"
      : "border border-gray-400 text-gray-800 bg-transparent hover:bg-gray-50";

  return (
    <button
      className={`rounded-md py-2 px-4 font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed ${styles} ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
