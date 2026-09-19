function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
}) {
  const baseStyle =
    "rounded-lg font-semibold transition duration-300 flex items-center justify-center";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-gray-500 hover:bg-gray-600 text-white",

    success:
      "bg-green-600 hover:bg-green-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-2.5 text-base",

    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${
          disabled || loading
            ? "opacity-60 cursor-not-allowed"
            : ""
        }
      `}
    >
      {loading ? "Please Wait..." : children}
    </button>
  );
}

export default Button;