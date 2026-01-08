const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  className,
  min,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-semibold text-md">
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`px-2 py-2 border outline-none rounded-md ${
          errors[id] ? "border-red-500" : "border-slate-600"
        }`}
        {...register(id, {
          required: { value: required, message },
          minLength: min
            ? { value: min, message: "Minimum 6 characters required" }
            : undefined,
        })}
      />

      {errors[id]?.message && (
        <p className="text-sm text-red-600">{errors[id].message}</p>
      )}
    </div>
  );
};

export default TextField;
