function Input({
  label,
  type = "text",
  placeholder = "",
  register,
  name,
  error,
  validation = {},
  required = false,
  disabled = false,
}) {
  return (
    <div className="mb-5">

      {/* Label */}

      <div className="flex items-center mb-2">

        <label className="font-medium text-gray-700">
          {label}
        </label>

        {required && (
          <span className="text-red-500 ml-1">*</span>
        )}

      </div>

      {/* Input */}

      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full rounded-lg border px-3 py-2 transition
        focus:outline-none focus:ring-2 focus:ring-blue-500
        ${
          error
            ? "border-red-500"
            : "border-gray-300"
        }
        ${
          disabled
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-white"
        }`}
        {...register(name, validation)}
      />

      {/* Error */}

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}

    </div>
  );
}

export default Input;